import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evo")
export default class EvoController {
  @operation({
    summary: "Get Evo",
  })
  @get()
  static getEvo = procedure({
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
