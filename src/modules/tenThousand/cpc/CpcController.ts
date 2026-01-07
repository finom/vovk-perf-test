import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpc")
export default class CpcController {
  @operation({
    summary: "Get Cpc",
  })
  @get()
  static getCpc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cpc",
  })
  @post("{id}")
  static createCpc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
