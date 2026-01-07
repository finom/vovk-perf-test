import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flg")
export default class FlgController {
  @operation({
    summary: "Get Flg",
  })
  @get()
  static getFlg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Flg",
  })
  @post("{id}")
  static createFlg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
