import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("awhs")
export default class AwhController {
  @operation({
    summary: "Get Awhs",
  })
  @get()
  static getAwhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Awh",
  })
  @post("{id}")
  static createAwh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
