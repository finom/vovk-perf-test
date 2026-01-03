import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcxes")
export default class HcxController {
  @operation({
    summary: "Get Hcxes",
  })
  @get()
  static getHcxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hcx",
  })
  @post("{id}")
  static createHcx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
