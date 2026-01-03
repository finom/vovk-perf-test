import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czas")
export default class CzaController {
  @operation({
    summary: "Get Czas",
  })
  @get()
  static getCzas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cza",
  })
  @post("{id}")
  static createCza = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
