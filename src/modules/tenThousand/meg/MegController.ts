import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("megs")
export default class MegController {
  @operation({
    summary: "Get Megs",
  })
  @get()
  static getMegs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Meg",
  })
  @post("{id}")
  static createMeg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
