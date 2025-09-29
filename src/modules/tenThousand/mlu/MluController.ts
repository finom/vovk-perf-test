import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mlus")
export default class MluController {
  @operation({
    summary: "Get Mlus",
  })
  @get()
  static getMlus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mlu",
  })
  @post("{id}")
  static createMlu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
