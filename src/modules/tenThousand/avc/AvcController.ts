import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("avcs")
export default class AvcController {
  @operation({
    summary: "Get Avcs",
  })
  @get()
  static getAvcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Avc",
  })
  @post("{id}")
  static createAvc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
