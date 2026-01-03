import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsrs")
export default class HsrController {
  @operation({
    summary: "Get Hsrs",
  })
  @get()
  static getHsrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hsr",
  })
  @post("{id}")
  static createHsr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
