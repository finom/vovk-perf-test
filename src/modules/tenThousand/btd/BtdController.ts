import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btd")
export default class BtdController {
  @operation({
    summary: "Get Btd",
  })
  @get()
  static getBtd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Btd",
  })
  @post("{id}")
  static createBtd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
