import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("imies")
export default class ImyController {
  @operation({
    summary: "Get Imies",
  })
  @get()
  static getImies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Imy",
  })
  @post("{id}")
  static createImy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
