import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ijqs")
export default class IjqController {
  @operation({
    summary: "Get Ijqs",
  })
  @get()
  static getIjqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ijq",
  })
  @post("{id}")
  static createIjq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
