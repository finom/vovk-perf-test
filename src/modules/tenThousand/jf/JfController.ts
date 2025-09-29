import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jfs")
export default class JfController {
  @operation({
    summary: "Get Jfs",
  })
  @get()
  static getJfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jf",
  })
  @post("{id}")
  static createJf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
