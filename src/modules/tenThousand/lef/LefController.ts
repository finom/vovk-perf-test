import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lefs")
export default class LefController {
  @operation({
    summary: "Get Lefs",
  })
  @get()
  static getLefs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lef",
  })
  @post("{id}")
  static createLef = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
