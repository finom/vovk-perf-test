import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kxcs")
export default class KxcController {
  @operation({
    summary: "Get Kxcs",
  })
  @get()
  static getKxcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kxc",
  })
  @post("{id}")
  static createKxc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
