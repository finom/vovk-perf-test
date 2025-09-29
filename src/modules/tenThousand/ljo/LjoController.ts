import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ljos")
export default class LjoController {
  @operation({
    summary: "Get Ljos",
  })
  @get()
  static getLjos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ljo",
  })
  @post("{id}")
  static createLjo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
