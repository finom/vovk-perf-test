import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlos")
export default class MloController {
  @operation({
    summary: "Get Mlos",
  })
  @get()
  static getMlos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mlo",
  })
  @post("{id}")
  static createMlo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
