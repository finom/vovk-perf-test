import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nro")
export default class NroController {
  @operation({
    summary: "Get Nro",
  })
  @get()
  static getNro = procedure({
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
