import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jvgs")
export default class JvgController {
  @operation({
    summary: "Get Jvgs",
  })
  @get()
  static getJvgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jvg",
  })
  @post("{id}")
  static createJvg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
