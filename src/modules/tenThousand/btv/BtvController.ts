import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btv")
export default class BtvController {
  @operation({
    summary: "Get Btv",
  })
  @get()
  static getBtv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Btv",
  })
  @post("{id}")
  static createBtv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
