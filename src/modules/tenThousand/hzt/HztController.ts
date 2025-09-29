import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hzts")
export default class HztController {
  @operation({
    summary: "Get Hzts",
  })
  @get()
  static getHzts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hzt",
  })
  @post("{id}")
  static createHzt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
