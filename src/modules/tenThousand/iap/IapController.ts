import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iap")
export default class IapController {
  @operation({
    summary: "Get Iap",
  })
  @get()
  static getIap = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iap",
  })
  @post("{id}")
  static createIap = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
