import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hzfs")
export default class HzfController {
  @operation({
    summary: "Get Hzfs",
  })
  @get()
  static getHzfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hzf",
  })
  @post("{id}")
  static createHzf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
