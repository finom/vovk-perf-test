import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfcs")
export default class CfcController {
  @operation({
    summary: "Get Cfcs",
  })
  @get()
  static getCfcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cfc",
  })
  @post("{id}")
  static createCfc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
