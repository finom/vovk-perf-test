import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jels")
export default class JelController {
  @operation({
    summary: "Get Jels",
  })
  @get()
  static getJels = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jel",
  })
  @post("{id}")
  static createJel = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
