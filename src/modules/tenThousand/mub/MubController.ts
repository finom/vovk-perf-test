import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mubs")
export default class MubController {
  @operation({
    summary: "Get Mubs",
  })
  @get()
  static getMubs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mub",
  })
  @post("{id}")
  static createMub = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
