import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpt")
export default class CptController {
  @operation({
    summary: "Get Cpt",
  })
  @get()
  static getCpt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cpt",
  })
  @post("{id}")
  static createCpt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
