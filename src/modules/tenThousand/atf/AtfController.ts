import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("atfs")
export default class AtfController {
  @operation({
    summary: "Get Atfs",
  })
  @get()
  static getAtfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Atf",
  })
  @post("{id}")
  static createAtf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
