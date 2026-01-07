import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eaj")
export default class EajController {
  @operation({
    summary: "Get Eaj",
  })
  @get()
  static getEaj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eaj",
  })
  @post("{id}")
  static createEaj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
