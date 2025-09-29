import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mjqs")
export default class MjqController {
  @operation({
    summary: "Get Mjqs",
  })
  @get()
  static getMjqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mjq",
  })
  @post("{id}")
  static createMjq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
