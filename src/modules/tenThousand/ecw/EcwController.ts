import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecw")
export default class EcwController {
  @operation({
    summary: "Get Ecw",
  })
  @get()
  static getEcw = procedure({
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
