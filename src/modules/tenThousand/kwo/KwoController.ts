import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kwos")
export default class KwoController {
  @operation({
    summary: "Get Kwos",
  })
  @get()
  static getKwos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kwo",
  })
  @post("{id}")
  static createKwo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
