import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btns")
export default class BtnController {
  @operation({
    summary: "Get Btns",
  })
  @get()
  static getBtns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Btn",
  })
  @post("{id}")
  static createBtn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
