import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtzs")
export default class GtzController {
  @operation({
    summary: "Get Gtzs",
  })
  @get()
  static getGtzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gtz",
  })
  @post("{id}")
  static createGtz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
