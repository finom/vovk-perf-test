import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elts")
export default class EltController {
  @operation({
    summary: "Get Elts",
  })
  @get()
  static getElts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Elt",
  })
  @post("{id}")
  static createElt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
