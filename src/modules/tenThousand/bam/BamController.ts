import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bams")
export default class BamController {
  @operation({
    summary: "Get Bams",
  })
  @get()
  static getBams = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bam",
  })
  @post("{id}")
  static createBam = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
