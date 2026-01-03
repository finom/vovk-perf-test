import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csms")
export default class CsmController {
  @operation({
    summary: "Get Csms",
  })
  @get()
  static getCsms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Csm",
  })
  @post("{id}")
  static createCsm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
