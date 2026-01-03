import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvbs")
export default class GvbController {
  @operation({
    summary: "Get Gvbs",
  })
  @get()
  static getGvbs = procedure({
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
