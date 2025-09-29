import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("egies")
export default class EgyController {
  @operation({
    summary: "Get Egies",
  })
  @get()
  static getEgies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Egy",
  })
  @post("{id}")
  static createEgy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
