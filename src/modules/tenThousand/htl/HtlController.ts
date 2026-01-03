import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htls")
export default class HtlController {
  @operation({
    summary: "Get Htls",
  })
  @get()
  static getHtls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Htl",
  })
  @post("{id}")
  static createHtl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
