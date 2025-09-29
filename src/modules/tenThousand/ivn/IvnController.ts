import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ivns")
export default class IvnController {
  @operation({
    summary: "Get Ivns",
  })
  @get()
  static getIvns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ivn",
  })
  @post("{id}")
  static createIvn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
