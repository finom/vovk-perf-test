import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eecs")
export default class EecController {
  @operation({
    summary: "Get Eecs",
  })
  @get()
  static getEecs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eec",
  })
  @post("{id}")
  static createEec = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
