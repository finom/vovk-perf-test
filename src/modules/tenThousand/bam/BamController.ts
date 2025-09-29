import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bams")
export default class BamController {
  @operation({
    summary: "Get Bams",
  })
  @get()
  static getBams = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bam",
  })
  @post("{id}")
  static createBam = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
