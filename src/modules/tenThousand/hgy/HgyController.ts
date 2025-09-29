import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hgies")
export default class HgyController {
  @operation({
    summary: "Get Hgies",
  })
  @get()
  static getHgies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hgy",
  })
  @post("{id}")
  static createHgy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
