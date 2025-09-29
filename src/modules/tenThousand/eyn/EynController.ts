import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eyns")
export default class EynController {
  @operation({
    summary: "Get Eyns",
  })
  @get()
  static getEyns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eyn",
  })
  @post("{id}")
  static createEyn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
