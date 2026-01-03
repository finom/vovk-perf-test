import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvvs")
export default class GvvController {
  @operation({
    summary: "Get Gvvs",
  })
  @get()
  static getGvvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gvv",
  })
  @post("{id}")
  static createGvv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
