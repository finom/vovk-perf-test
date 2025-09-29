import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("khns")
export default class KhnController {
  @operation({
    summary: "Get Khns",
  })
  @get()
  static getKhns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Khn",
  })
  @post("{id}")
  static createKhn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
