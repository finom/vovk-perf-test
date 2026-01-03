import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsxes")
export default class HsxController {
  @operation({
    summary: "Get Hsxes",
  })
  @get()
  static getHsxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hsx",
  })
  @post("{id}")
  static createHsx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
