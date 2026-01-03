import { procedure, prefix, get, post, operation } from "vovk";

@prefix("uvs")
export default class UvController {
  @operation({
    summary: "Get Uvs",
  })
  @get()
  static getUvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Uv",
  })
  @post("{id}")
  static createUv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
