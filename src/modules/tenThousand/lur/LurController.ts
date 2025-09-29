import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lurs")
export default class LurController {
  @operation({
    summary: "Get Lurs",
  })
  @get()
  static getLurs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lur",
  })
  @post("{id}")
  static createLur = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
