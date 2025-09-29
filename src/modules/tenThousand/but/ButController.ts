import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("buts")
export default class ButController {
  @operation({
    summary: "Get Buts",
  })
  @get()
  static getButs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create But",
  })
  @post("{id}")
  static createBut = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
