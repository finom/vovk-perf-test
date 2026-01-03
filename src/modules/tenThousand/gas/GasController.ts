import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gases")
export default class GasController {
  @operation({
    summary: "Get Gases",
  })
  @get()
  static getGases = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gas",
  })
  @post("{id}")
  static createGas = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
