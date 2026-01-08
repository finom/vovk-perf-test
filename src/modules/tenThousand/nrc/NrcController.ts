import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nrc")
export default class NrcController {
  @operation({
    summary: "Get Nrc",
  })
  @get()
  static getNrc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nrc",
  })
  @post("{id}")
  static createNrc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
