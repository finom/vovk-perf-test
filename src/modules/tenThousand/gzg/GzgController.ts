import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzgs")
export default class GzgController {
  @operation({
    summary: "Get Gzgs",
  })
  @get()
  static getGzgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gzg",
  })
  @post("{id}")
  static createGzg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
