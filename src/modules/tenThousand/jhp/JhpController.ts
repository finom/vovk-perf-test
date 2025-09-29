import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jhps")
export default class JhpController {
  @operation({
    summary: "Get Jhps",
  })
  @get()
  static getJhps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jhp",
  })
  @post("{id}")
  static createJhp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
