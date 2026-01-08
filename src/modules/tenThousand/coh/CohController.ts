import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("coh")
export default class CohController {
  @operation({
    summary: "Get Coh",
  })
  @get()
  static getCoh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Coh",
  })
  @post("{id}")
  static createCoh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
