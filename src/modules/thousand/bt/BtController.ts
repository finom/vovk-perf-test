import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bts")
export default class BtController {
  @operation({
    summary: "Get Bts",
  })
  @get()
  static getBts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bt",
  })
  @post("{id}")
  static createBt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
