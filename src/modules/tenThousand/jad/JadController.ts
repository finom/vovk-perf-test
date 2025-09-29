import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jads")
export default class JadController {
  @operation({
    summary: "Get Jads",
  })
  @get()
  static getJads = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jad",
  })
  @post("{id}")
  static createJad = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
