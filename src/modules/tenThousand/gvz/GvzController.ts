import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvzs")
export default class GvzController {
  @operation({
    summary: "Get Gvzs",
  })
  @get()
  static getGvzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gvz",
  })
  @post("{id}")
  static createGvz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
