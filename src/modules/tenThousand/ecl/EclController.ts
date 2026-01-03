import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecls")
export default class EclController {
  @operation({
    summary: "Get Ecls",
  })
  @get()
  static getEcls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ecl",
  })
  @post("{id}")
  static createEcl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
