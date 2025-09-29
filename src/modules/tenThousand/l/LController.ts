import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ls")
export default class LController {
  @operation({
    summary: "Get LS",
  })
  @get()
  static getLS = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create L",
  })
  @post("{id}")
  static createL = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
