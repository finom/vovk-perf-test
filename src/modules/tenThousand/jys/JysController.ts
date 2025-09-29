import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jys")
export default class JysController {
  @operation({
    summary: "Get Jys",
  })
  @get()
  static getJys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jys",
  })
  @post("{id}")
  static createJys = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
