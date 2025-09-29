import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ieps")
export default class IepController {
  @operation({
    summary: "Get Ieps",
  })
  @get()
  static getIeps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iep",
  })
  @post("{id}")
  static createIep = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
