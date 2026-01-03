import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpas")
export default class HpaController {
  @operation({
    summary: "Get Hpas",
  })
  @get()
  static getHpas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hpa",
  })
  @post("{id}")
  static createHpa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
