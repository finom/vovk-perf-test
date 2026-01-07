import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewk")
export default class EwkController {
  @operation({
    summary: "Get Ewk",
  })
  @get()
  static getEwk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ewk",
  })
  @post("{id}")
  static createEwk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
