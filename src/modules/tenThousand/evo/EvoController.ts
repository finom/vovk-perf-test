import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evos")
export default class EvoController {
  @operation({
    summary: "Get Evos",
  })
  @get()
  static getEvos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Evo",
  })
  @post("{id}")
  static createEvo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
