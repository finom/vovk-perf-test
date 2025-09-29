import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nqes")
export default class NqeController {
  @operation({
    summary: "Get Nqes",
  })
  @get()
  static getNqes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nqe",
  })
  @post("{id}")
  static createNqe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
