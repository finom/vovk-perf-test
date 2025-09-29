import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kays")
export default class KayController {
  @operation({
    summary: "Get Kays",
  })
  @get()
  static getKays = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kay",
  })
  @post("{id}")
  static createKay = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
