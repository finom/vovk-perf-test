import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("huis")
export default class HuiController {
  @operation({
    summary: "Get Huis",
  })
  @get()
  static getHuis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hui",
  })
  @post("{id}")
  static createHui = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
