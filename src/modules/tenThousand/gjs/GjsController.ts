import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjs")
export default class GjsController {
  @operation({
    summary: "Get Gjs",
  })
  @get()
  static getGjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gjs",
  })
  @post("{id}")
  static createGjs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
