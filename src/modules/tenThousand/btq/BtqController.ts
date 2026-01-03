import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btqs")
export default class BtqController {
  @operation({
    summary: "Get Btqs",
  })
  @get()
  static getBtqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Btq",
  })
  @post("{id}")
  static createBtq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
