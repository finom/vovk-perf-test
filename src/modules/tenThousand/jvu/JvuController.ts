import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jvus")
export default class JvuController {
  @operation({
    summary: "Get Jvus",
  })
  @get()
  static getJvus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jvu",
  })
  @post("{id}")
  static createJvu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
