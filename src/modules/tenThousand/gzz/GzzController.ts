import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzzes")
export default class GzzController {
  @operation({
    summary: "Get Gzzes",
  })
  @get()
  static getGzzes = procedure({
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
