import { procedure, prefix, get, post, operation } from "vovk";

@prefix("oms")
export default class OmController {
  @operation({
    summary: "Get Oms",
  })
  @get()
  static getOms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Om",
  })
  @post("{id}")
  static createOm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
