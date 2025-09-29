import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nrzs")
export default class NrzController {
  @operation({
    summary: "Get Nrzs",
  })
  @get()
  static getNrzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nrz",
  })
  @post("{id}")
  static createNrz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
