import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("asies")
export default class AsyController {
  @operation({
    summary: "Get Asies",
  })
  @get()
  static getAsies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Asy",
  })
  @post("{id}")
  static createAsy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
