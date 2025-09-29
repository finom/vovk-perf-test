import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fzes")
export default class FzeController {
  @operation({
    summary: "Get Fzes",
  })
  @get()
  static getFzes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fze",
  })
  @post("{id}")
  static createFze = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
