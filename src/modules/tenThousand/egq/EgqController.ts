import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("egqs")
export default class EgqController {
  @operation({
    summary: "Get Egqs",
  })
  @get()
  static getEgqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Egq",
  })
  @post("{id}")
  static createEgq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
