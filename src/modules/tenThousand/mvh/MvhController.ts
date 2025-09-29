import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mvhs")
export default class MvhController {
  @operation({
    summary: "Get Mvhs",
  })
  @get()
  static getMvhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mvh",
  })
  @post("{id}")
  static createMvh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
