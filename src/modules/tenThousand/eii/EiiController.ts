import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eiis")
export default class EiiController {
  @operation({
    summary: "Get Eiis",
  })
  @get()
  static getEiis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eii",
  })
  @post("{id}")
  static createEii = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
