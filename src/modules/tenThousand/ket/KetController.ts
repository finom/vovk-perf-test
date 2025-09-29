import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kets")
export default class KetController {
  @operation({
    summary: "Get Kets",
  })
  @get()
  static getKets = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ket",
  })
  @post("{id}")
  static createKet = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
