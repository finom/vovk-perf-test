import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("les")
export default class LeController {
  @operation({
    summary: "Get Les",
  })
  @get()
  static getLes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Le",
  })
  @post("{id}")
  static createLe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
