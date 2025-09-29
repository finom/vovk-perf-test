import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bies")
export default class BieController {
  @operation({
    summary: "Get Bies",
  })
  @get()
  static getBies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bie",
  })
  @post("{id}")
  static createBie = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
