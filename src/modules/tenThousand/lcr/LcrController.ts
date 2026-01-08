import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lcr")
export default class LcrController {
  @operation({
    summary: "Get Lcr",
  })
  @get()
  static getLcr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lcr",
  })
  @post("{id}")
  static createLcr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
