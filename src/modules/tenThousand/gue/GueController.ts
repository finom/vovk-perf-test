import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gues")
export default class GueController {
  @operation({
    summary: "Get Gues",
  })
  @get()
  static getGues = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gue",
  })
  @post("{id}")
  static createGue = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
