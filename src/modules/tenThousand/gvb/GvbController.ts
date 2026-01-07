import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvb")
export default class GvbController {
  @operation({
    summary: "Get Gvb",
  })
  @get()
  static getGvb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gvb",
  })
  @post("{id}")
  static createGvb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
