import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccrs")
export default class CcrController {
  @operation({
    summary: "Get Ccrs",
  })
  @get()
  static getCcrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ccr",
  })
  @post("{id}")
  static createCcr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
