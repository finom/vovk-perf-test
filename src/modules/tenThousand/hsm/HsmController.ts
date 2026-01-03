import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsms")
export default class HsmController {
  @operation({
    summary: "Get Hsms",
  })
  @get()
  static getHsms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hsm",
  })
  @post("{id}")
  static createHsm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
