import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmt")
export default class GmtController {
  @operation({
    summary: "Get Gmt",
  })
  @get()
  static getGmt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gmt",
  })
  @post("{id}")
  static createGmt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
