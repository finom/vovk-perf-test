import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eacs")
export default class EacController {
  @operation({
    summary: "Get Eacs",
  })
  @get()
  static getEacs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eac",
  })
  @post("{id}")
  static createEac = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
