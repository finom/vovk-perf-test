import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("flvs")
export default class FlvController {
  @operation({
    summary: "Get Flvs",
  })
  @get()
  static getFlvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Flv",
  })
  @post("{id}")
  static createFlv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
