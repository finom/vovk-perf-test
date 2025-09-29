import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jfhs")
export default class JfhController {
  @operation({
    summary: "Get Jfhs",
  })
  @get()
  static getJfhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jfh",
  })
  @post("{id}")
  static createJfh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
