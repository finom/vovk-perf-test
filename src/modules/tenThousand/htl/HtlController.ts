import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htl")
export default class HtlController {
  @operation({
    summary: "Get Htl",
  })
  @get()
  static getHtl = procedure({
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
