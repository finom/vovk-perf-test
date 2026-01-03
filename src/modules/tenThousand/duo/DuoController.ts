import { procedure, prefix, get, post, operation } from "vovk";

@prefix("duos")
export default class DuoController {
  @operation({
    summary: "Get Duos",
  })
  @get()
  static getDuos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Duo",
  })
  @post("{id}")
  static createDuo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
