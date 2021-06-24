import React from "react";
import Button from "elements/Button";

export default function sectionCategories({ data }) {
  return data.map((category, index1) => {
    return (
      <section className="container mb-7 py-3" key={`category-${index1}`}>
        <h4 className="mb-3 font-weight-medium">{category.name}</h4>
        <div className="container-grid">
          {category.items.length === 0 ? (
            <div className="row">
              <div className="col-auto align-items-center">
                Tidak ada properti di kategori ini
              </div>
            </div>
          ) : (
            category.items.map((item, index2) => {
              return (
                <div
                  className="item column-3 row-1 section-category"
                  key={`category-${index2}`}
                >
                  <div className="card card-category">
                    {item.isPopular && (
                      <div className="tag">
                        <span className="font-weight-light">Pilihan </span>
                        Popular
                      </div>
                    )}
                    <Button
                      type="link"
                      href={`/properties/${item._id}`}
                      className="stretched-link d-block text-gray-800"
                    >
                      <figure className="img-wrapper" style={{ height: 180 }}>
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="img-cover"
                        ></img>
                      </figure>
                    </Button>
                  </div>

                  <div className="meta-wrapper">
                    <Button
                      type="link"
                      href={`/properties/${item._id}`}
                      className="stretched-link d-block text-gray-800"
                    >
                      <h5 className="h4">{item.name}</h5>
                    </Button>
                    <span className="text-gray-500">
                      {item.city}, {item.country}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    );
  });
}
