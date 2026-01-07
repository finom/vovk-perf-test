import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gta")
export default class GtaController {
  @operation({
    summary: "Get Gta",
  })
  @get()
  static getGta = procedure({
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
