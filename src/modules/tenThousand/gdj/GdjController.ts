import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gdjs")
export default class GdjController {
  @operation({
    summary: "Get Gdjs",
  })
  @get()
  static getGdjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gdj",
  })
  @post("{id}")
  static createGdj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
