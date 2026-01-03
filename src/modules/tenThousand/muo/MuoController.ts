import { procedure, prefix, get, post, operation } from "vovk";

@prefix("muos")
export default class MuoController {
  @operation({
    summary: "Get Muos",
  })
  @get()
  static getMuos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Muo",
  })
  @post("{id}")
  static createMuo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
