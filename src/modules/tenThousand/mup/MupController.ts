import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mups")
export default class MupController {
  @operation({
    summary: "Get Mups",
  })
  @get()
  static getMups = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mup",
  })
  @post("{id}")
  static createMup = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
