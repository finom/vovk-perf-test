import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nigs")
export default class NigController {
  @operation({
    summary: "Get Nigs",
  })
  @get()
  static getNigs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nig",
  })
  @post("{id}")
  static createNig = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
