import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccb")
export default class CcbController {
  @operation({
    summary: "Get Ccb",
  })
  @get()
  static getCcb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ccb",
  })
  @post("{id}")
  static createCcb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
