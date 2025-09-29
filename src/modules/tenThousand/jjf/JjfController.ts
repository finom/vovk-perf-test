import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jjfs")
export default class JjfController {
  @operation({
    summary: "Get Jjfs",
  })
  @get()
  static getJjfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jjf",
  })
  @post("{id}")
  static createJjf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
