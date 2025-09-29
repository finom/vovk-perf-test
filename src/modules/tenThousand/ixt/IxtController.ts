import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ixts")
export default class IxtController {
  @operation({
    summary: "Get Ixts",
  })
  @get()
  static getIxts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ixt",
  })
  @post("{id}")
  static createIxt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
