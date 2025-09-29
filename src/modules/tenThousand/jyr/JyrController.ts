import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jyrs")
export default class JyrController {
  @operation({
    summary: "Get Jyrs",
  })
  @get()
  static getJyrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jyr",
  })
  @post("{id}")
  static createJyr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
