import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kems")
export default class KemController {
  @operation({
    summary: "Get Kems",
  })
  @get()
  static getKems = procedure({
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
