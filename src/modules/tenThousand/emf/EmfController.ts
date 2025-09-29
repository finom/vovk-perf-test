import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("emfs")
export default class EmfController {
  @operation({
    summary: "Get Emfs",
  })
  @get()
  static getEmfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Emf",
  })
  @post("{id}")
  static createEmf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
