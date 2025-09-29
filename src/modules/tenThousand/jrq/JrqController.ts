import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jrqs")
export default class JrqController {
  @operation({
    summary: "Get Jrqs",
  })
  @get()
  static getJrqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jrq",
  })
  @post("{id}")
  static createJrq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
