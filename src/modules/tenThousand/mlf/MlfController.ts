import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mlves")
export default class MlfController {
  @operation({
    summary: "Get Mlves",
  })
  @get()
  static getMlves = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mlf",
  })
  @post("{id}")
  static createMlf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
