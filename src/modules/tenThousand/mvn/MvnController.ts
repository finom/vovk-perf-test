import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mvns")
export default class MvnController {
  @operation({
    summary: "Get Mvns",
  })
  @get()
  static getMvns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mvn",
  })
  @post("{id}")
  static createMvn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
