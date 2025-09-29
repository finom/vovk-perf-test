import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dmjs")
export default class DmjController {
  @operation({
    summary: "Get Dmjs",
  })
  @get()
  static getDmjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dmj",
  })
  @post("{id}")
  static createDmj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
