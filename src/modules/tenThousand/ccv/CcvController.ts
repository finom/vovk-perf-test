import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccv")
export default class CcvController {
  @operation({
    summary: "Get Ccv",
  })
  @get()
  static getCcv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ccv",
  })
  @post("{id}")
  static createCcv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
