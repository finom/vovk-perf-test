import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ercs")
export default class ErcController {
  @operation({
    summary: "Get Ercs",
  })
  @get()
  static getErcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Erc",
  })
  @post("{id}")
  static createErc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
