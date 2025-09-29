import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mjfs")
export default class MjfController {
  @operation({
    summary: "Get Mjfs",
  })
  @get()
  static getMjfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mjf",
  })
  @post("{id}")
  static createMjf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
