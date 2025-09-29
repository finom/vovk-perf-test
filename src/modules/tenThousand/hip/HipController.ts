import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hips")
export default class HipController {
  @operation({
    summary: "Get Hips",
  })
  @get()
  static getHips = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hip",
  })
  @post("{id}")
  static createHip = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
