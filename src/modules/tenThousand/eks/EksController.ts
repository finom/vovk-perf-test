import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eks")
export default class EksController {
  @operation({
    summary: "Get Eks",
  })
  @get()
  static getEks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eks",
  })
  @post("{id}")
  static createEks = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
