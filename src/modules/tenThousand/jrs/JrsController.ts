import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jrs")
export default class JrsController {
  @operation({
    summary: "Get Jrs",
  })
  @get()
  static getJrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jrs",
  })
  @post("{id}")
  static createJrs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
