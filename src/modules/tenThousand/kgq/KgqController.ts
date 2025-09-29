import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kgqs")
export default class KgqController {
  @operation({
    summary: "Get Kgqs",
  })
  @get()
  static getKgqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kgq",
  })
  @post("{id}")
  static createKgq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
