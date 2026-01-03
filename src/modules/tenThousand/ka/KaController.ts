import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kas")
export default class KaController {
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
    summary: "Create Ka",
  })
  @post("{id}")
  static createKa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
