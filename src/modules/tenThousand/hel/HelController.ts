import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hels")
export default class HelController {
  @operation({
    summary: "Get Hels",
  })
  @get()
  static getHels = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hel",
  })
  @post("{id}")
  static createHel = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
