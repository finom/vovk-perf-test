import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbas")
export default class CbaController {
  @operation({
    summary: "Get Cbas",
  })
  @get()
  static getCbas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cba",
  })
  @post("{id}")
  static createCba = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
