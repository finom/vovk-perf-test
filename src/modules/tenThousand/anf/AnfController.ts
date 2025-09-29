import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("anfs")
export default class AnfController {
  @operation({
    summary: "Get Anfs",
  })
  @get()
  static getAnfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Anf",
  })
  @post("{id}")
  static createAnf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
