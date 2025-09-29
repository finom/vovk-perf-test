import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lebs")
export default class LebController {
  @operation({
    summary: "Get Lebs",
  })
  @get()
  static getLebs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Leb",
  })
  @post("{id}")
  static createLeb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
