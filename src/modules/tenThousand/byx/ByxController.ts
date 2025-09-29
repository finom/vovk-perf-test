import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("byxes")
export default class ByxController {
  @operation({
    summary: "Get Byxes",
  })
  @get()
  static getByxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Byx",
  })
  @post("{id}")
  static createByx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
