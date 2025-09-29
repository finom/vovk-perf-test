import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ahps")
export default class AhpController {
  @operation({
    summary: "Get Ahps",
  })
  @get()
  static getAhps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ahp",
  })
  @post("{id}")
  static createAhp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
