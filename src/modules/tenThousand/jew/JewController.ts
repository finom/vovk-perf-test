import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jews")
export default class JewController {
  @operation({
    summary: "Get Jews",
  })
  @get()
  static getJews = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jew",
  })
  @post("{id}")
  static createJew = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
