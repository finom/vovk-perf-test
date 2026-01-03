import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajs")
export default class AjController {
  @operation({
    summary: "Get Ajs",
  })
  @get()
  static getAjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aj",
  })
  @post("{id}")
  static createAj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
