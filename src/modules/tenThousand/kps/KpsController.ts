import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kps")
export default class KpsController {
  @operation({
    summary: "Get Kps",
  })
  @get()
  static getKps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kps",
  })
  @post("{id}")
  static createKps = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
