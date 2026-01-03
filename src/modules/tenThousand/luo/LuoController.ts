import { procedure, prefix, get, post, operation } from "vovk";

@prefix("luos")
export default class LuoController {
  @operation({
    summary: "Get Luos",
  })
  @get()
  static getLuos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Luo",
  })
  @post("{id}")
  static createLuo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
