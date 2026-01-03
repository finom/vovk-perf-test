import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esfs")
export default class EsfController {
  @operation({
    summary: "Get Esfs",
  })
  @get()
  static getEsfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Esf",
  })
  @post("{id}")
  static createEsf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
