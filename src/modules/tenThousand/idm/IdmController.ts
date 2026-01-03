import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idms")
export default class IdmController {
  @operation({
    summary: "Get Idms",
  })
  @get()
  static getIdms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Idm",
  })
  @post("{id}")
  static createIdm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
