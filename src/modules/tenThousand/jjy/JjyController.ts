import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jjies")
export default class JjyController {
  @operation({
    summary: "Get Jjies",
  })
  @get()
  static getJjies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jjy",
  })
  @post("{id}")
  static createJjy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
