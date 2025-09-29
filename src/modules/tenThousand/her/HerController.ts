import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hers")
export default class HerController {
  @operation({
    summary: "Get Hers",
  })
  @get()
  static getHers = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Her",
  })
  @post("{id}")
  static createHer = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
