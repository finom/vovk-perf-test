import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzx")
export default class GzxController {
  @operation({
    summary: "Get Gzx",
  })
  @get()
  static getGzx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gzx",
  })
  @post("{id}")
  static createGzx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
