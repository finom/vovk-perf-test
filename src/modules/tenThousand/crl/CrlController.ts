import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crls")
export default class CrlController {
  @operation({
    summary: "Get Crls",
  })
  @get()
  static getCrls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Crl",
  })
  @post("{id}")
  static createCrl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
