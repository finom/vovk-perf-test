import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jfzs")
export default class JfzController {
  @operation({
    summary: "Get Jfzs",
  })
  @get()
  static getJfzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jfz",
  })
  @post("{id}")
  static createJfz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
