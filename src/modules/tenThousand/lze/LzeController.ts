import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lzes")
export default class LzeController {
  @operation({
    summary: "Get Lzes",
  })
  @get()
  static getLzes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lze",
  })
  @post("{id}")
  static createLze = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
