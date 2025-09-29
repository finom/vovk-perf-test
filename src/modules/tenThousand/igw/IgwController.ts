import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("igws")
export default class IgwController {
  @operation({
    summary: "Get Igws",
  })
  @get()
  static getIgws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Igw",
  })
  @post("{id}")
  static createIgw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
