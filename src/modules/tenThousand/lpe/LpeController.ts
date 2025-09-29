import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lpes")
export default class LpeController {
  @operation({
    summary: "Get Lpes",
  })
  @get()
  static getLpes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lpe",
  })
  @post("{id}")
  static createLpe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
