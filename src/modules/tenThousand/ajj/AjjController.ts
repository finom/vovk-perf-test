import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajjs")
export default class AjjController {
  @operation({
    summary: "Get Ajjs",
  })
  @get()
  static getAjjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ajj",
  })
  @post("{id}")
  static createAjj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
