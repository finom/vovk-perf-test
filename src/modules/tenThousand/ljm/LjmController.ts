import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ljms")
export default class LjmController {
  @operation({
    summary: "Get Ljms",
  })
  @get()
  static getLjms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ljm",
  })
  @post("{id}")
  static createLjm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
