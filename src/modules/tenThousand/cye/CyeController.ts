import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cyes")
export default class CyeController {
  @operation({
    summary: "Get Cyes",
  })
  @get()
  static getCyes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cye",
  })
  @post("{id}")
  static createCye = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
