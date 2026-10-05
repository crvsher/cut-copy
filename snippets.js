// Site text and the catalog. Everything the page says lives in this file.
//
// SITE.heading / SITE.subhead: the only text on the page besides the snippets.
// SITE.shuffle: true = new order on every visit, false = the order below.
//
// Each snippet: { kind, client, text }
//   kind: "billboard" | "headline" | "tagline" | "oneliner" | "paragraph" | "social"
//   client: shown small after the snippet (leave "" for none)
//   text: the copy. Line breaks (\n) are kept for social posts and paragraphs.
//
// The entries below are lorem ipsum placeholders at realistic lengths, so the layout
// can be judged before the real copy goes in.

const SITE = {
  heading: "cut copy",
  subhead: "an incomplete catalog of the copy they cut",
  shuffle: false,
};

const SNIPPETS = [
  { kind: "billboard", client: "Airbnb", text: "Lorem ipsum dolor sit." },
  { kind: "paragraph", client: "Twitter", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident." },
  { kind: "tagline", client: "OpenTable", text: "Sunt in culpa qui." },
  { kind: "headline", client: "Splice", text: "Officia deserunt mollit anim id est laborum sed perspiciatis." },
  { kind: "oneliner", client: "PAX Labs", text: "Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam." },
  { kind: "social", client: "Twitter", text: "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit." },
  { kind: "tagline", client: "Spring Health", text: "Neque porro quisquam est." },
  { kind: "headline", client: "Rippling", text: "Qui dolorem ipsum quia dolor sit amet, consectetur adipisci." },
  { kind: "billboard", client: "OpenTable", text: "Velit sed quia non." },
  { kind: "oneliner", client: "Danner", text: "Numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." },
  { kind: "paragraph", client: "Splice", text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus." },
  { kind: "social", client: "Vine", text: "Qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.\n\nCupiditate non provident, similique sunt in culpa." },
  { kind: "tagline", client: "Nike", text: "Et harum quidem rerum." },
  { kind: "headline", client: "Airbnb", text: "Facilis est et expedita distinctio nam libero tempore." },
  { kind: "oneliner", client: "Flux.ai", text: "Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat." },
  { kind: "billboard", client: "Oakley", text: "Facere possimus omnis voluptas." },
  { kind: "paragraph", client: "Spring Health", text: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat." },
  { kind: "social", client: "", text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus." },
  { kind: "tagline", client: "Syfy", text: "Omnis dolor repellendus." },
  { kind: "headline", client: "Design Scout", text: "Temporibus autem quibusdam et aut officiis debitis rerum." },
  { kind: "oneliner", client: "BuzzFeed", text: "Saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae itaque earum." },
  { kind: "billboard", client: "Subway", text: "Rerum hic tenetur sapiente." },
  { kind: "social", client: "Twitter", text: "Delectus ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Sed ut perspiciatis unde omnis." },
  { kind: "paragraph", client: "Airbnb", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt." },
  { kind: "tagline", client: "Getty Images", text: "Iste natus error sit." },
  { kind: "headline", client: "NBC", text: "Neque porro quisquam est qui dolorem ipsum quia dolor." },
  { kind: "oneliner", client: "Microsoft", text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae." },
  { kind: "social", client: "Facebook", text: "Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\n\nAt vero eos et accusamus." },
  { kind: "billboard", client: "Twitter", text: "Iusto odio dignissimos." },
  { kind: "paragraph", client: "Rippling", text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet." },
  { kind: "tagline", client: "SeatGeek", text: "Ducimus qui blanditiis." },
  { kind: "headline", client: "PAX Labs", text: "Praesentium voluptatum deleniti atque corrupti quos dolores." },
  { kind: "oneliner", client: "Adidas", text: "Et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa." },
  { kind: "social", client: "", text: "Qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio." },
  { kind: "tagline", client: "Danner", text: "Mollitia animi laborum." },
  { kind: "oneliner", client: "National Geographic", text: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias." },
];
