import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("daas")
export default class DaaController {
  @operation({
    summary: "Get Daas",
  })
  @get()
  static getDaas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Daa",
  })
  @post("{id}")
  static createDaa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
