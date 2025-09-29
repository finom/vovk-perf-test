import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jvqs")
export default class JvqController {
  @operation({
    summary: "Get Jvqs",
  })
  @get()
  static getJvqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jvq",
  })
  @post("{id}")
  static createJvq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
