import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksms")
export default class KsmController {
  @operation({
    summary: "Get Ksms",
  })
  @get()
  static getKsms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ksm",
  })
  @post("{id}")
  static createKsm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
