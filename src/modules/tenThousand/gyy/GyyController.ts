import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gyys")
export default class GyyController {
  @operation({
    summary: "Get Gyys",
  })
  @get()
  static getGyys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gyy",
  })
  @post("{id}")
  static createGyy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
