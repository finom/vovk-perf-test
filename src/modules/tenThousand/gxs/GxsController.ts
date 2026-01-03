import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxs")
export default class GxsController {
  @operation({
    summary: "Get Gxs",
  })
  @get()
  static getGxs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gxs",
  })
  @post("{id}")
  static createGxs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
