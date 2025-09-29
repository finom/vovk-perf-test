import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nqds")
export default class NqdController {
  @operation({
    summary: "Get Nqds",
  })
  @get()
  static getNqds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nqd",
  })
  @post("{id}")
  static createNqd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
