import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("asgs")
export default class AsgController {
  @operation({
    summary: "Get Asgs",
  })
  @get()
  static getAsgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Asg",
  })
  @post("{id}")
  static createAsg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
