import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iqc")
export default class IqcController {
  @operation({
    summary: "Get Iqc",
  })
  @get()
  static getIqc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iqc",
  })
  @post("{id}")
  static createIqc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
