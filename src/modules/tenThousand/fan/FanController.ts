import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fans")
export default class FanController {
  @operation({
    summary: "Get Fans",
  })
  @get()
  static getFans = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fan",
  })
  @post("{id}")
  static createFan = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
