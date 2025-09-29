import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ijws")
export default class IjwController {
  @operation({
    summary: "Get Ijws",
  })
  @get()
  static getIjws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ijw",
  })
  @post("{id}")
  static createIjw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
