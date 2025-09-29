import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("huzs")
export default class HuzController {
  @operation({
    summary: "Get Huzs",
  })
  @get()
  static getHuzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Huz",
  })
  @post("{id}")
  static createHuz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
