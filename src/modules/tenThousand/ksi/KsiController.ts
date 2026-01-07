import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksi")
export default class KsiController {
  @operation({
    summary: "Get Ksi",
  })
  @get()
  static getKsi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ksi",
  })
  @post("{id}")
  static createKsi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
