import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iyms")
export default class IymController {
  @operation({
    summary: "Get Iyms",
  })
  @get()
  static getIyms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iym",
  })
  @post("{id}")
  static createIym = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
