import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bbas")
export default class BbaController {
  @operation({
    summary: "Get Bbas",
  })
  @get()
  static getBbas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bba",
  })
  @post("{id}")
  static createBba = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
