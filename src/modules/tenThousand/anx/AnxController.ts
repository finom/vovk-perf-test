import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("anxes")
export default class AnxController {
  @operation({
    summary: "Get Anxes",
  })
  @get()
  static getAnxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Anx",
  })
  @post("{id}")
  static createAnx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
