import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzas")
export default class MzaController {
  @operation({
    summary: "Get Mzas",
  })
  @get()
  static getMzas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mza",
  })
  @post("{id}")
  static createMza = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
