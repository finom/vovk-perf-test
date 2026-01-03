import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kas")
export default class KasController {
  @operation({
    summary: "Get Kas",
  })
  @get()
  static getKas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kas",
  })
  @post("{id}")
  static createKas = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
