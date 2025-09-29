import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ears")
export default class EarController {
  @operation({
    summary: "Get Ears",
  })
  @get()
  static getEars = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ear",
  })
  @post("{id}")
  static createEar = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
