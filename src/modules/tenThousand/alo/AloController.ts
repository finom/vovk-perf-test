import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alo")
export default class AloController {
  @operation({
    summary: "Get Alo",
  })
  @get()
  static getAlo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Alo",
  })
  @post("{id}")
  static createAlo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
