import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iois")
export default class IoiController {
  @operation({
    summary: "Get Iois",
  })
  @get()
  static getIois = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ioi",
  })
  @post("{id}")
  static createIoi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
