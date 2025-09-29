import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mxas")
export default class MxaController {
  @operation({
    summary: "Get Mxas",
  })
  @get()
  static getMxas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mxa",
  })
  @post("{id}")
  static createMxa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
