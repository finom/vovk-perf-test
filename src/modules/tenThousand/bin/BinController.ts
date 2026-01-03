import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bins")
export default class BinController {
  @operation({
    summary: "Get Bins",
  })
  @get()
  static getBins = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bin",
  })
  @post("{id}")
  static createBin = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
