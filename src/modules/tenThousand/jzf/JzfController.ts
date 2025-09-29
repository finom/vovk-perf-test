import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jzfs")
export default class JzfController {
  @operation({
    summary: "Get Jzfs",
  })
  @get()
  static getJzfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jzf",
  })
  @post("{id}")
  static createJzf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
