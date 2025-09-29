import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mkies")
export default class MkyController {
  @operation({
    summary: "Get Mkies",
  })
  @get()
  static getMkies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mky",
  })
  @post("{id}")
  static createMky = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
