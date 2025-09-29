import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ivus")
export default class IvuController {
  @operation({
    summary: "Get Ivus",
  })
  @get()
  static getIvus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ivu",
  })
  @post("{id}")
  static createIvu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
