import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lqies")
export default class LqyController {
  @operation({
    summary: "Get Lqies",
  })
  @get()
  static getLqies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lqy",
  })
  @post("{id}")
  static createLqy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
