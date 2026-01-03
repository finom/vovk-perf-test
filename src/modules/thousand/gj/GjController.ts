import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjs")
export default class GjController {
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
    summary: "Create Gj",
  })
  @post("{id}")
  static createGj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
