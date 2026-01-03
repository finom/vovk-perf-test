import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esis")
export default class EsiController {
  @operation({
    summary: "Get Esis",
  })
  @get()
  static getEsis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Esi",
  })
  @post("{id}")
  static createEsi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
