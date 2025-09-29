import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ahws")
export default class AhwController {
  @operation({
    summary: "Get Ahws",
  })
  @get()
  static getAhws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ahw",
  })
  @post("{id}")
  static createAhw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
