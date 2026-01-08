import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mrn")
export default class MrnController {
  @operation({
    summary: "Get Mrn",
  })
  @get()
  static getMrn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mrn",
  })
  @post("{id}")
  static createMrn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
