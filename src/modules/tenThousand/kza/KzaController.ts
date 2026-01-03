import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzas")
export default class KzaController {
  @operation({
    summary: "Get Kzas",
  })
  @get()
  static getKzas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kza",
  })
  @post("{id}")
  static createKza = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
