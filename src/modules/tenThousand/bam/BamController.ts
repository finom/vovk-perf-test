import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bam")
export default class BamController {
  @operation({
    summary: "Get Bam",
  })
  @get()
  static getBam = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bam",
  })
  @post("{id}")
  static createBam = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
