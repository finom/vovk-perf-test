import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("irks")
export default class IrkController {
  @operation({
    summary: "Get Irks",
  })
  @get()
  static getIrks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Irk",
  })
  @post("{id}")
  static createIrk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
