import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecl")
export default class EclController {
  @operation({
    summary: "Get Ecl",
  })
  @get()
  static getEcl = procedure({
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
