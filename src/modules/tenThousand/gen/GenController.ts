import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gens")
export default class GenController {
  @operation({
    summary: "Get Gens",
  })
  @get()
  static getGens = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gen",
  })
  @post("{id}")
  static createGen = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
