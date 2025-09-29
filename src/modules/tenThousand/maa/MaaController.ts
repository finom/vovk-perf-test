import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("maas")
export default class MaaController {
  @operation({
    summary: "Get Maas",
  })
  @get()
  static getMaas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Maa",
  })
  @post("{id}")
  static createMaa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
