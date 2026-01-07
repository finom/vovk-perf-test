import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btf")
export default class BtfController {
  @operation({
    summary: "Get Btf",
  })
  @get()
  static getBtf = procedure({
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
