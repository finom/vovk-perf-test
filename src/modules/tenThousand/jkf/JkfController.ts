import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jkfs")
export default class JkfController {
  @operation({
    summary: "Get Jkfs",
  })
  @get()
  static getJkfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jkf",
  })
  @post("{id}")
  static createJkf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
