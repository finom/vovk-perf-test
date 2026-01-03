import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcxes")
export default class LcxController {
  @operation({
    summary: "Get Lcxes",
  })
  @get()
  static getLcxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lcx",
  })
  @post("{id}")
  static createLcx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
