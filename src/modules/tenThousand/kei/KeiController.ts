import { procedure, prefix, get, post, operation } from "vovk";

@prefix("keis")
export default class KeiController {
  @operation({
    summary: "Get Keis",
  })
  @get()
  static getKeis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kei",
  })
  @post("{id}")
  static createKei = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
