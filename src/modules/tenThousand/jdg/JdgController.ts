import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jdgs")
export default class JdgController {
  @operation({
    summary: "Get Jdgs",
  })
  @get()
  static getJdgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jdg",
  })
  @post("{id}")
  static createJdg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
