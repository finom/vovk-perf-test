import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajs")
export default class AjsController {
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
    summary: "Create Ajs",
  })
  @post("{id}")
  static createAjs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
