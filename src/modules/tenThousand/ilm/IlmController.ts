import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilms")
export default class IlmController {
  @operation({
    summary: "Get Ilms",
  })
  @get()
  static getIlms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ilm",
  })
  @post("{id}")
  static createIlm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
