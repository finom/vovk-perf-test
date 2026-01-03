import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewas")
export default class EwaController {
  @operation({
    summary: "Get Ewas",
  })
  @get()
  static getEwas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ewa",
  })
  @post("{id}")
  static createEwa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
