import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krb")
export default class KrbController {
  @operation({
    summary: "Get Krb",
  })
  @get()
  static getKrb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Krb",
  })
  @post("{id}")
  static createKrb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
