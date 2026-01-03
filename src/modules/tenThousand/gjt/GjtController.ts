import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjts")
export default class GjtController {
  @operation({
    summary: "Get Gjts",
  })
  @get()
  static getGjts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gjt",
  })
  @post("{id}")
  static createGjt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
