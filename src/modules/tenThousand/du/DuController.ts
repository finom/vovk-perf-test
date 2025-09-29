import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dus")
export default class DuController {
  @operation({
    summary: "Get Dus",
  })
  @get()
  static getDus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Du",
  })
  @post("{id}")
  static createDu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
