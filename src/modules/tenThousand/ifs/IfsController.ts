import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ifs")
export default class IfsController {
  @operation({
    summary: "Get Ifs",
  })
  @get()
  static getIfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ifs",
  })
  @post("{id}")
  static createIfs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
