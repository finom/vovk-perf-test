import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("miws")
export default class MiwController {
  @operation({
    summary: "Get Miws",
  })
  @get()
  static getMiws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Miw",
  })
  @post("{id}")
  static createMiw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
