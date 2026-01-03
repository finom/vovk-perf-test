import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btus")
export default class BtuController {
  @operation({
    summary: "Get Btus",
  })
  @get()
  static getBtus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Btu",
  })
  @post("{id}")
  static createBtu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
