import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kwws")
export default class KwwController {
  @operation({
    summary: "Get Kwws",
  })
  @get()
  static getKwws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kww",
  })
  @post("{id}")
  static createKww = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
