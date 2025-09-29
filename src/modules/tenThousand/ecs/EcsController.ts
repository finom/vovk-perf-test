import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ecs")
export default class EcsController {
  @operation({
    summary: "Get Ecs",
  })
  @get()
  static getEcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ecs",
  })
  @post("{id}")
  static createEcs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
