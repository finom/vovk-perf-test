import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atas")
export default class AtaController {
  @operation({
    summary: "Get Atas",
  })
  @get()
  static getAtas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ata",
  })
  @post("{id}")
  static createAta = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
