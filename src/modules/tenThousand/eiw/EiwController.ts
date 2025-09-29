import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eiws")
export default class EiwController {
  @operation({
    summary: "Get Eiws",
  })
  @get()
  static getEiws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eiw",
  })
  @post("{id}")
  static createEiw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
