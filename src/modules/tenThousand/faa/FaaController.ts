import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("faas")
export default class FaaController {
  @operation({
    summary: "Get Faas",
  })
  @get()
  static getFaas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Faa",
  })
  @post("{id}")
  static createFaa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
