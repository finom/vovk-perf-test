import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ncr")
export default class NcrController {
  @operation({
    summary: "Get Ncr",
  })
  @get()
  static getNcr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ncr",
  })
  @post("{id}")
  static createNcr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
