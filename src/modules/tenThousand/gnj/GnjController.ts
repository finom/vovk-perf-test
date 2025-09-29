import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gnjs")
export default class GnjController {
  @operation({
    summary: "Get Gnjs",
  })
  @get()
  static getGnjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gnj",
  })
  @post("{id}")
  static createGnj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
