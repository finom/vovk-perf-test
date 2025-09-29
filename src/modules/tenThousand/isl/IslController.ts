import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("isls")
export default class IslController {
  @operation({
    summary: "Get Isls",
  })
  @get()
  static getIsls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Isl",
  })
  @post("{id}")
  static createIsl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
