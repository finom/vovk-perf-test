import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kaes")
export default class KaeController {
  @operation({
    summary: "Get Kaes",
  })
  @get()
  static getKaes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kae",
  })
  @post("{id}")
  static createKae = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
