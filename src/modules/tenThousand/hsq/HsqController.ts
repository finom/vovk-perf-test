import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsq")
export default class HsqController {
  @operation({
    summary: "Get Hsq",
  })
  @get()
  static getHsq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hsq",
  })
  @post("{id}")
  static createHsq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
