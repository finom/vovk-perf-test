import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jafs")
export default class JafController {
  @operation({
    summary: "Get Jafs",
  })
  @get()
  static getJafs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jaf",
  })
  @post("{id}")
  static createJaf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
