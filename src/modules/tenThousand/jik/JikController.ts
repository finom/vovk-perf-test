import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jiks")
export default class JikController {
  @operation({
    summary: "Get Jiks",
  })
  @get()
  static getJiks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jik",
  })
  @post("{id}")
  static createJik = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
