import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hams")
export default class HamController {
  @operation({
    summary: "Get Hams",
  })
  @get()
  static getHams = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ham",
  })
  @post("{id}")
  static createHam = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
