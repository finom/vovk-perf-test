import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcm")
export default class HcmController {
  @operation({
    summary: "Get Hcm",
  })
  @get()
  static getHcm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hcm",
  })
  @post("{id}")
  static createHcm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
