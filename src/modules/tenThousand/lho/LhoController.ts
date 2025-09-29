import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lhos")
export default class LhoController {
  @operation({
    summary: "Get Lhos",
  })
  @get()
  static getLhos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lho",
  })
  @post("{id}")
  static createLho = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
