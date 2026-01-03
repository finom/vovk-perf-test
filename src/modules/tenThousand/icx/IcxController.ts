import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icxes")
export default class IcxController {
  @operation({
    summary: "Get Icxes",
  })
  @get()
  static getIcxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Icx",
  })
  @post("{id}")
  static createIcx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
