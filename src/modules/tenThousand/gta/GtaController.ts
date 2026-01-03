import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtas")
export default class GtaController {
  @operation({
    summary: "Get Gtas",
  })
  @get()
  static getGtas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gta",
  })
  @post("{id}")
  static createGta = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
