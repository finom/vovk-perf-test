import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lcus")
export default class LcuController {
  @operation({
    summary: "Get Lcus",
  })
  @get()
  static getLcus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lcu",
  })
  @post("{id}")
  static createLcu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
