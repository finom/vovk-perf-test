import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ants")
export default class AntController {
  @operation({
    summary: "Get Ants",
  })
  @get()
  static getAnts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ant",
  })
  @post("{id}")
  static createAnt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
