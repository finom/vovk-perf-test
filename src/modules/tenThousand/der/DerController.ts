import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ders")
export default class DerController {
  @operation({
    summary: "Get Ders",
  })
  @get()
  static getDers = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Der",
  })
  @post("{id}")
  static createDer = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
