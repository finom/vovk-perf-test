import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jjqs")
export default class JjqController {
  @operation({
    summary: "Get Jjqs",
  })
  @get()
  static getJjqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jjq",
  })
  @post("{id}")
  static createJjq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
