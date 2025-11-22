use axum::{
    routing::{get, post},
    Router,
    Json,
};
use serde::{Deserialize, Serialize};
use std::net::SocketAddr;

#[derive(Deserialize, Serialize)]
struct ContactForm {
    name: String,
    email: String,
    message: String,
}

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/", get(root))
        .route("/contact", post(contact));

    let addr = SocketAddr::from(([127, 0, 0, 1], 4000));
    println!("Server running at http://{}", addr);

    let listener = tokio::net::TcpListener::bind(addr).await.unwrap();
    axum::serve(listener, app).await.unwrap();
}

async fn root() -> &'static str {
    "Rust backend running!"
}

async fn contact(
    Json(payload): Json<ContactForm>,
) -> Json<ContactForm> {
    println!("Received: {} - {}", payload.name, payload.email);
    Json(payload)
}
