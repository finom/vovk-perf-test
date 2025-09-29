import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mlies")
export default class MlyController {
  @operation({
    summary: "Get Mlies",
  })
  @get()
  static getMlies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mly",
  })
  @post("{id}")
  static createMly = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
