import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iijs")
export default class IijController {
  @operation({
    summary: "Get Iijs",
  })
  @get()
  static getIijs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iij",
  })
  @post("{id}")
  static createIij = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
