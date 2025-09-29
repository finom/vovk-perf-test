import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jjps")
export default class JjpController {
  @operation({
    summary: "Get Jjps",
  })
  @get()
  static getJjps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jjp",
  })
  @post("{id}")
  static createJjp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
