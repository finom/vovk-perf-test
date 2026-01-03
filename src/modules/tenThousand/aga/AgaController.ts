import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agas")
export default class AgaController {
  @operation({
    summary: "Get Agas",
  })
  @get()
  static getAgas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aga",
  })
  @post("{id}")
  static createAga = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
