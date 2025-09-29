import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jays")
export default class JayController {
  @operation({
    summary: "Get Jays",
  })
  @get()
  static getJays = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jay",
  })
  @post("{id}")
  static createJay = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
