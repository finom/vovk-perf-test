import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cros")
export default class CroController {
  @operation({
    summary: "Get Cros",
  })
  @get()
  static getCros = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cro",
  })
  @post("{id}")
  static createCro = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
