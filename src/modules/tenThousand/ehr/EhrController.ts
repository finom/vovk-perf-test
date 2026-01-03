import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehrs")
export default class EhrController {
  @operation({
    summary: "Get Ehrs",
  })
  @get()
  static getEhrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ehr",
  })
  @post("{id}")
  static createEhr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
