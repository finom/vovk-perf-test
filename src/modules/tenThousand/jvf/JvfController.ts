import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jvfs")
export default class JvfController {
  @operation({
    summary: "Get Jvfs",
  })
  @get()
  static getJvfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jvf",
  })
  @post("{id}")
  static createJvf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
