import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mrqs")
export default class MrqController {
  @operation({
    summary: "Get Mrqs",
  })
  @get()
  static getMrqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mrq",
  })
  @post("{id}")
  static createMrq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
