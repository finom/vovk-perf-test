import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("moos")
export default class MooController {
  @operation({
    summary: "Get Moos",
  })
  @get()
  static getMoos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Moo",
  })
  @post("{id}")
  static createMoo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
