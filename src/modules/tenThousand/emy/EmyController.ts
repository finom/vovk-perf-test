import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("emies")
export default class EmyController {
  @operation({
    summary: "Get Emies",
  })
  @get()
  static getEmies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Emy",
  })
  @post("{id}")
  static createEmy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
