import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aras")
export default class AraController {
  @operation({
    summary: "Get Aras",
  })
  @get()
  static getAras = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ara",
  })
  @post("{id}")
  static createAra = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
