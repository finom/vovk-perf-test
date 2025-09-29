import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bpbs")
export default class BpbController {
  @operation({
    summary: "Get Bpbs",
  })
  @get()
  static getBpbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bpb",
  })
  @post("{id}")
  static createBpb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
