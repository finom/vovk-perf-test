import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpjs")
export default class KpjController {
  @operation({
    summary: "Get Kpjs",
  })
  @get()
  static getKpjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kpj",
  })
  @post("{id}")
  static createKpj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
