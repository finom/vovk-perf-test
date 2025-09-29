import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kjqs")
export default class KjqController {
  @operation({
    summary: "Get Kjqs",
  })
  @get()
  static getKjqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kjq",
  })
  @post("{id}")
  static createKjq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
