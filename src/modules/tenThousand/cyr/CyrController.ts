import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyr")
export default class CyrController {
  @operation({
    summary: "Get Cyr",
  })
  @get()
  static getCyr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cyr",
  })
  @post("{id}")
  static createCyr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
