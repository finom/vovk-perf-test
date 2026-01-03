import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzas")
export default class LzaController {
  @operation({
    summary: "Get Lzas",
  })
  @get()
  static getLzas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lza",
  })
  @post("{id}")
  static createLza = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
