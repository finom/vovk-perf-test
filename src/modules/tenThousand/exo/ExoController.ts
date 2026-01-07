import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exo")
export default class ExoController {
  @operation({
    summary: "Get Exo",
  })
  @get()
  static getExo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Exo",
  })
  @post("{id}")
  static createExo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
