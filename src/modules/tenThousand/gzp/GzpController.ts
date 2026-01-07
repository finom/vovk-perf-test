import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzp")
export default class GzpController {
  @operation({
    summary: "Get Gzp",
  })
  @get()
  static getGzp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gzp",
  })
  @post("{id}")
  static createGzp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
