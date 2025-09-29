import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("avns")
export default class AvnController {
  @operation({
    summary: "Get Avns",
  })
  @get()
  static getAvns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Avn",
  })
  @post("{id}")
  static createAvn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
