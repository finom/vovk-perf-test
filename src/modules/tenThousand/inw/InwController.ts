import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("inws")
export default class InwController {
  @operation({
    summary: "Get Inws",
  })
  @get()
  static getInws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Inw",
  })
  @post("{id}")
  static createInw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
