import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jvps")
export default class JvpController {
  @operation({
    summary: "Get Jvps",
  })
  @get()
  static getJvps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jvp",
  })
  @post("{id}")
  static createJvp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
