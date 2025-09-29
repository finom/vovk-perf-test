import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gors")
export default class GorController {
  @operation({
    summary: "Get Gors",
  })
  @get()
  static getGors = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gor",
  })
  @post("{id}")
  static createGor = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
