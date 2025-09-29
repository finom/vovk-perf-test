import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nars")
export default class NarController {
  @operation({
    summary: "Get Nars",
  })
  @get()
  static getNars = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nar",
  })
  @post("{id}")
  static createNar = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
