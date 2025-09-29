import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jvhs")
export default class JvhController {
  @operation({
    summary: "Get Jvhs",
  })
  @get()
  static getJvhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jvh",
  })
  @post("{id}")
  static createJvh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
