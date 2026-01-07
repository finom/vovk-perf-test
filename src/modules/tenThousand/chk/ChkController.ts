import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chk")
export default class ChkController {
  @operation({
    summary: "Get Chk",
  })
  @get()
  static getChk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Chk",
  })
  @post("{id}")
  static createChk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
