import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bpms")
export default class BpmController {
  @operation({
    summary: "Get Bpms",
  })
  @get()
  static getBpms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bpm",
  })
  @post("{id}")
  static createBpm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
