import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("euis")
export default class EuiController {
  @operation({
    summary: "Get Euis",
  })
  @get()
  static getEuis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eui",
  })
  @post("{id}")
  static createEui = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
