import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adns")
export default class AdnController {
  @operation({
    summary: "Get Adns",
  })
  @get()
  static getAdns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Adn",
  })
  @post("{id}")
  static createAdn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
