import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lees")
export default class LeeController {
  @operation({
    summary: "Get Lees",
  })
  @get()
  static getLees = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lee",
  })
  @post("{id}")
  static createLee = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
