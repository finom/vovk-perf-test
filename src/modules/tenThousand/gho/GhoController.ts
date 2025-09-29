import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ghos")
export default class GhoController {
  @operation({
    summary: "Get Ghos",
  })
  @get()
  static getGhos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gho",
  })
  @post("{id}")
  static createGho = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
