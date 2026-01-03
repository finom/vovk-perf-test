import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccjs")
export default class CcjController {
  @operation({
    summary: "Get Ccjs",
  })
  @get()
  static getCcjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ccj",
  })
  @post("{id}")
  static createCcj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
