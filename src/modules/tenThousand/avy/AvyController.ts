import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("avies")
export default class AvyController {
  @operation({
    summary: "Get Avies",
  })
  @get()
  static getAvies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Avy",
  })
  @post("{id}")
  static createAvy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
