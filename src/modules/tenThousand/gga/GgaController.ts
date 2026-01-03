import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggas")
export default class GgaController {
  @operation({
    summary: "Get Ggas",
  })
  @get()
  static getGgas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gga",
  })
  @post("{id}")
  static createGga = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
