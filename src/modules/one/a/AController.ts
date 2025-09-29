import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("as")
export default class AController {
  @operation({
    summary: "Get AS",
  })
  @get()
  static getAS = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create A",
  })
  @post("{id}")
  static createA = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
