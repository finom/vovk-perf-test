import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ms")
export default class MController {
  @operation({
    summary: "Get MS",
  })
  @get()
  static getMS = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create M",
  })
  @post("{id}")
  static createM = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
