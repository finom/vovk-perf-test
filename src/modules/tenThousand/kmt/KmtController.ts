import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmts")
export default class KmtController {
  @operation({
    summary: "Get Kmts",
  })
  @get()
  static getKmts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kmt",
  })
  @post("{id}")
  static createKmt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
