import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acr")
export default class AcrController {
  @operation({
    summary: "Get Acr",
  })
  @get()
  static getAcr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Acr",
  })
  @post("{id}")
  static createAcr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
