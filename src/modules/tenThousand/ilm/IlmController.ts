import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilm")
export default class IlmController {
  @operation({
    summary: "Get Ilm",
  })
  @get()
  static getIlm = procedure({
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
