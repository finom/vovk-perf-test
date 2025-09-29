import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ljfs")
export default class LjfController {
  @operation({
    summary: "Get Ljfs",
  })
  @get()
  static getLjfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ljf",
  })
  @post("{id}")
  static createLjf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
