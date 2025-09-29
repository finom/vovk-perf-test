import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kggs")
export default class KggController {
  @operation({
    summary: "Get Kggs",
  })
  @get()
  static getKggs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kgg",
  })
  @post("{id}")
  static createKgg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
