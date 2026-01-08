import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

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
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
