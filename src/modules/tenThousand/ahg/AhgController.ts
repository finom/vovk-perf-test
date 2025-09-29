import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ahgs")
export default class AhgController {
  @operation({
    summary: "Get Ahgs",
  })
  @get()
  static getAhgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ahg",
  })
  @post("{id}")
  static createAhg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
