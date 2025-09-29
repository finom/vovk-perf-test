import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nhies")
export default class NhyController {
  @operation({
    summary: "Get Nhies",
  })
  @get()
  static getNhies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nhy",
  })
  @post("{id}")
  static createNhy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
