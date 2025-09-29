import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ngs")
export default class NgsController {
  @operation({
    summary: "Get Ngs",
  })
  @get()
  static getNgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ngs",
  })
  @post("{id}")
  static createNgs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
