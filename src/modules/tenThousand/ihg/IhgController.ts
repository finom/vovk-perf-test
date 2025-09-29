import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ihgs")
export default class IhgController {
  @operation({
    summary: "Get Ihgs",
  })
  @get()
  static getIhgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ihg",
  })
  @post("{id}")
  static createIhg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
