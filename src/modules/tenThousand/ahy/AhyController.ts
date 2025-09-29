import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ahies")
export default class AhyController {
  @operation({
    summary: "Get Ahies",
  })
  @get()
  static getAhies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ahy",
  })
  @post("{id}")
  static createAhy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
