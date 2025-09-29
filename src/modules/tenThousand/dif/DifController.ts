import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("difs")
export default class DifController {
  @operation({
    summary: "Get Difs",
  })
  @get()
  static getDifs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dif",
  })
  @post("{id}")
  static createDif = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
