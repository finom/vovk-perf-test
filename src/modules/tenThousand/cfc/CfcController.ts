import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfc")
export default class CfcController {
  @operation({
    summary: "Get Cfc",
  })
  @get()
  static getCfc = procedure({
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
