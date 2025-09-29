import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eygs")
export default class EygController {
  @operation({
    summary: "Get Eygs",
  })
  @get()
  static getEygs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eyg",
  })
  @post("{id}")
  static createEyg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
