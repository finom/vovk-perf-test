import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcx")
export default class HcxController {
  @operation({
    summary: "Get Hcx",
  })
  @get()
  static getHcx = procedure({
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
