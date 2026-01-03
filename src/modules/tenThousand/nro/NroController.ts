import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nros")
export default class NroController {
  @operation({
    summary: "Get Nros",
  })
  @get()
  static getNros = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nro",
  })
  @post("{id}")
  static createNro = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
