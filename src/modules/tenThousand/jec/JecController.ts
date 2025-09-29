import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jecs")
export default class JecController {
  @operation({
    summary: "Get Jecs",
  })
  @get()
  static getJecs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jec",
  })
  @post("{id}")
  static createJec = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
