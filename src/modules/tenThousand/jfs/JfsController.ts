import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jfs")
export default class JfsController {
  @operation({
    summary: "Get Jfs",
  })
  @get()
  static getJfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jfs",
  })
  @post("{id}")
  static createJfs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
