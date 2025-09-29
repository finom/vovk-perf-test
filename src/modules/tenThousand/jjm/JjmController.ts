import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jjms")
export default class JjmController {
  @operation({
    summary: "Get Jjms",
  })
  @get()
  static getJjms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jjm",
  })
  @post("{id}")
  static createJjm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
