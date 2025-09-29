import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mjos")
export default class MjoController {
  @operation({
    summary: "Get Mjos",
  })
  @get()
  static getMjos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mjo",
  })
  @post("{id}")
  static createMjo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
