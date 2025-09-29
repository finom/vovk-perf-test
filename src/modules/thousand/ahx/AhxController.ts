import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ahxes")
export default class AhxController {
  @operation({
    summary: "Get Ahxes",
  })
  @get()
  static getAhxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ahx",
  })
  @post("{id}")
  static createAhx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
