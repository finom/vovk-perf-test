import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mud")
export default class MudController {
  @operation({
    summary: "Get Mud",
  })
  @get()
  static getMud = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mud",
  })
  @post("{id}")
  static createMud = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
