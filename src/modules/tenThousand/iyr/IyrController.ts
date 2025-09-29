import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iyrs")
export default class IyrController {
  @operation({
    summary: "Get Iyrs",
  })
  @get()
  static getIyrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iyr",
  })
  @post("{id}")
  static createIyr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
