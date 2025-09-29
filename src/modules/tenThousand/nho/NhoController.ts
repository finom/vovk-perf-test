import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nhos")
export default class NhoController {
  @operation({
    summary: "Get Nhos",
  })
  @get()
  static getNhos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nho",
  })
  @post("{id}")
  static createNho = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
