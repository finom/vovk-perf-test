import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("isds")
export default class IsdController {
  @operation({
    summary: "Get Isds",
  })
  @get()
  static getIsds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Isd",
  })
  @post("{id}")
  static createIsd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
