import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idp")
export default class IdpController {
  @operation({
    summary: "Get Idp",
  })
  @get()
  static getIdp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Idp",
  })
  @post("{id}")
  static createIdp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
