import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gzms")
export default class GzmController {
  @operation({
    summary: "Get Gzms",
  })
  @get()
  static getGzms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gzm",
  })
  @post("{id}")
  static createGzm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
