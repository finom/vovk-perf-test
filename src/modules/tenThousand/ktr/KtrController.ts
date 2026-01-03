import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktrs")
export default class KtrController {
  @operation({
    summary: "Get Ktrs",
  })
  @get()
  static getKtrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ktr",
  })
  @post("{id}")
  static createKtr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
