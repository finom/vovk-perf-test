import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btfs")
export default class BtfController {
  @operation({
    summary: "Get Btfs",
  })
  @get()
  static getBtfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Btf",
  })
  @post("{id}")
  static createBtf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
