import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bam")
export default class BamController {
  @operation({
    summary: "Get Bam",
  })
  @get()
  static getBam = procedure({
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
