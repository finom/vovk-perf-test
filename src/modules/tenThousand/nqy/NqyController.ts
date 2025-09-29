import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nqies")
export default class NqyController {
  @operation({
    summary: "Get Nqies",
  })
  @get()
  static getNqies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nqy",
  })
  @post("{id}")
  static createNqy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
