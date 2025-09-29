import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nlves")
export default class NlfController {
  @operation({
    summary: "Get Nlves",
  })
  @get()
  static getNlves = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nlf",
  })
  @post("{id}")
  static createNlf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
