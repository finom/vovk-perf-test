import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eyps")
export default class EypController {
  @operation({
    summary: "Get Eyps",
  })
  @get()
  static getEyps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eyp",
  })
  @post("{id}")
  static createEyp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
