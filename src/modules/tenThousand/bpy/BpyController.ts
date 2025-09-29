import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bpies")
export default class BpyController {
  @operation({
    summary: "Get Bpies",
  })
  @get()
  static getBpies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bpy",
  })
  @post("{id}")
  static createBpy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
