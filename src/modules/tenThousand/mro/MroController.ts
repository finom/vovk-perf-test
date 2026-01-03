import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mros")
export default class MroController {
  @operation({
    summary: "Get Mros",
  })
  @get()
  static getMros = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mro",
  })
  @post("{id}")
  static createMro = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
