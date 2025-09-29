import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mpes")
export default class MpeController {
  @operation({
    summary: "Get Mpes",
  })
  @get()
  static getMpes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mpe",
  })
  @post("{id}")
  static createMpe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
