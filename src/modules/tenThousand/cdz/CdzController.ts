import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdzs")
export default class CdzController {
  @operation({
    summary: "Get Cdzs",
  })
  @get()
  static getCdzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cdz",
  })
  @post("{id}")
  static createCdz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
