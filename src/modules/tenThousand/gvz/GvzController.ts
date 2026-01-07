import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvz")
export default class GvzController {
  @operation({
    summary: "Get Gvz",
  })
  @get()
  static getGvz = procedure({
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
