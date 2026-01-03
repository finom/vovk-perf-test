import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzas")
export default class JzaController {
  @operation({
    summary: "Get Jzas",
  })
  @get()
  static getJzas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jza",
  })
  @post("{id}")
  static createJza = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
