import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mzes")
export default class MzeController {
  @operation({
    summary: "Get Mzes",
  })
  @get()
  static getMzes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mze",
  })
  @post("{id}")
  static createMze = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
