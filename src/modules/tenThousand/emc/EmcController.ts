import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("emcs")
export default class EmcController {
  @operation({
    summary: "Get Emcs",
  })
  @get()
  static getEmcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Emc",
  })
  @post("{id}")
  static createEmc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
