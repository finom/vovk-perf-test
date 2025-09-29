import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hvfs")
export default class HvfController {
  @operation({
    summary: "Get Hvfs",
  })
  @get()
  static getHvfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hvf",
  })
  @post("{id}")
  static createHvf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
