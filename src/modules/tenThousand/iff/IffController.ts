import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iffs")
export default class IffController {
  @operation({
    summary: "Get Iffs",
  })
  @get()
  static getIffs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iff",
  })
  @post("{id}")
  static createIff = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
