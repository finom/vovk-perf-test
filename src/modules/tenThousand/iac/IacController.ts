import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iacs")
export default class IacController {
  @operation({
    summary: "Get Iacs",
  })
  @get()
  static getIacs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iac",
  })
  @post("{id}")
  static createIac = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
