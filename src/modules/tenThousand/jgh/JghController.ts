import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jghs")
export default class JghController {
  @operation({
    summary: "Get Jghs",
  })
  @get()
  static getJghs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jgh",
  })
  @post("{id}")
  static createJgh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
