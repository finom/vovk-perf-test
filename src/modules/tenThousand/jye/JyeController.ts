import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jyes")
export default class JyeController {
  @operation({
    summary: "Get Jyes",
  })
  @get()
  static getJyes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jye",
  })
  @post("{id}")
  static createJye = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
