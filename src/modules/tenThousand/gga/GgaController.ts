import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gga")
export default class GgaController {
  @operation({
    summary: "Get Gga",
  })
  @get()
  static getGga = procedure({
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
