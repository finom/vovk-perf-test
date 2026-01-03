import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htas")
export default class HtaController {
  @operation({
    summary: "Get Htas",
  })
  @get()
  static getHtas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hta",
  })
  @post("{id}")
  static createHta = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
