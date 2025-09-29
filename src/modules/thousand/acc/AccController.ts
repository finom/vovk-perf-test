import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("accs")
export default class AccController {
  @operation({
    summary: "Get Accs",
  })
  @get()
  static getAccs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Acc",
  })
  @post("{id}")
  static createAcc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
