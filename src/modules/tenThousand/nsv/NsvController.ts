import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nsvs")
export default class NsvController {
  @operation({
    summary: "Get Nsvs",
  })
  @get()
  static getNsvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nsv",
  })
  @post("{id}")
  static createNsv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
