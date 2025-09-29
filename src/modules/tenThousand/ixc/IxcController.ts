import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ixcs")
export default class IxcController {
  @operation({
    summary: "Get Ixcs",
  })
  @get()
  static getIxcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ixc",
  })
  @post("{id}")
  static createIxc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
