import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("clves")
export default class ClfController {
  @operation({
    summary: "Get Clves",
  })
  @get()
  static getClves = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Clf",
  })
  @post("{id}")
  static createClf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
