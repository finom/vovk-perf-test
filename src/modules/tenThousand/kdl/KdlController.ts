import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kdls")
export default class KdlController {
  @operation({
    summary: "Get Kdls",
  })
  @get()
  static getKdls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kdl",
  })
  @post("{id}")
  static createKdl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
