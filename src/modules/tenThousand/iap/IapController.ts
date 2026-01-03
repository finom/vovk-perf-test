import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iaps")
export default class IapController {
  @operation({
    summary: "Get Iaps",
  })
  @get()
  static getIaps = procedure({
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
