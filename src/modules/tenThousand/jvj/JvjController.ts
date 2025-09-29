import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jvjs")
export default class JvjController {
  @operation({
    summary: "Get Jvjs",
  })
  @get()
  static getJvjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jvj",
  })
  @post("{id}")
  static createJvj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
