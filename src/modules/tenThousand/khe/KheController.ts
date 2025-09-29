import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("khes")
export default class KheController {
  @operation({
    summary: "Get Khes",
  })
  @get()
  static getKhes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Khe",
  })
  @post("{id}")
  static createKhe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
