import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdt")
export default class BdtController {
  @operation({
    summary: "Get Bdt",
  })
  @get()
  static getBdt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bdt",
  })
  @post("{id}")
  static createBdt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
