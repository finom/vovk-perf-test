import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mjms")
export default class MjmController {
  @operation({
    summary: "Get Mjms",
  })
  @get()
  static getMjms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mjm",
  })
  @post("{id}")
  static createMjm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
