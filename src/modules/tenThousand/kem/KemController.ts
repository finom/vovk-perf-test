import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kem")
export default class KemController {
  @operation({
    summary: "Get Kem",
  })
  @get()
  static getKem = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kem",
  })
  @post("{id}")
  static createKem = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
