import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecws")
export default class EcwController {
  @operation({
    summary: "Get Ecws",
  })
  @get()
  static getEcws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ecw",
  })
  @post("{id}")
  static createEcw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
