import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jyks")
export default class JykController {
  @operation({
    summary: "Get Jyks",
  })
  @get()
  static getJyks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jyk",
  })
  @post("{id}")
  static createJyk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
