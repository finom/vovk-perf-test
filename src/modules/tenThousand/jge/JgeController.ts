import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jges")
export default class JgeController {
  @operation({
    summary: "Get Jges",
  })
  @get()
  static getJges = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jge",
  })
  @post("{id}")
  static createJge = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
