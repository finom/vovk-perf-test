import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwas")
export default class MwaController {
  @operation({
    summary: "Get Mwas",
  })
  @get()
  static getMwas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mwa",
  })
  @post("{id}")
  static createMwa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
