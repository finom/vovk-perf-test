import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mcas")
export default class McaController {
  @operation({
    summary: "Get Mcas",
  })
  @get()
  static getMcas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mca",
  })
  @post("{id}")
  static createMca = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
