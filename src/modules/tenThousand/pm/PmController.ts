import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("pms")
export default class PmController {
  @operation({
    summary: "Get Pms",
  })
  @get()
  static getPms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Pm",
  })
  @post("{id}")
  static createPm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
