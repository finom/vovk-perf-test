import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cpies")
export default class CpyController {
  @operation({
    summary: "Get Cpies",
  })
  @get()
  static getCpies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cpy",
  })
  @post("{id}")
  static createCpy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
