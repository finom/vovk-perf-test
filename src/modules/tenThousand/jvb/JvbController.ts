import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jvbs")
export default class JvbController {
  @operation({
    summary: "Get Jvbs",
  })
  @get()
  static getJvbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jvb",
  })
  @post("{id}")
  static createJvb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
