import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gprs")
export default class GprController {
  @operation({
    summary: "Get Gprs",
  })
  @get()
  static getGprs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gpr",
  })
  @post("{id}")
  static createGpr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
