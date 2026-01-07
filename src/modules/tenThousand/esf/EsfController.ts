import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esf")
export default class EsfController {
  @operation({
    summary: "Get Esf",
  })
  @get()
  static getEsf = procedure({
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
