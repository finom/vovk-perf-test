import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("myts")
export default class MytController {
  @operation({
    summary: "Get Myts",
  })
  @get()
  static getMyts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Myt",
  })
  @post("{id}")
  static createMyt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
