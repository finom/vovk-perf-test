import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lpps")
export default class LppController {
  @operation({
    summary: "Get Lpps",
  })
  @get()
  static getLpps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lpp",
  })
  @post("{id}")
  static createLpp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
