import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fyms")
export default class FymController {
  @operation({
    summary: "Get Fyms",
  })
  @get()
  static getFyms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fym",
  })
  @post("{id}")
  static createFym = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
