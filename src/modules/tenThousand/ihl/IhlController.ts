import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ihls")
export default class IhlController {
  @operation({
    summary: "Get Ihls",
  })
  @get()
  static getIhls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ihl",
  })
  @post("{id}")
  static createIhl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
