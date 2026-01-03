import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egas")
export default class EgaController {
  @operation({
    summary: "Get Egas",
  })
  @get()
  static getEgas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ega",
  })
  @post("{id}")
  static createEga = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
