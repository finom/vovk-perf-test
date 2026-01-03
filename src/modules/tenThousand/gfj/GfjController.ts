import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfjs")
export default class GfjController {
  @operation({
    summary: "Get Gfjs",
  })
  @get()
  static getGfjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gfj",
  })
  @post("{id}")
  static createGfj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
