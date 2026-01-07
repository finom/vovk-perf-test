import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzz")
export default class GzzController {
  @operation({
    summary: "Get Gzz",
  })
  @get()
  static getGzz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gzz",
  })
  @post("{id}")
  static createGzz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
