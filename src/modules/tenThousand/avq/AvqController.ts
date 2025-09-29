import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("avqs")
export default class AvqController {
  @operation({
    summary: "Get Avqs",
  })
  @get()
  static getAvqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Avq",
  })
  @post("{id}")
  static createAvq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
