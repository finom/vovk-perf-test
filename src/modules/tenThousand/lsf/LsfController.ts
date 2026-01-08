import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lsf")
export default class LsfController {
  @operation({
    summary: "Get Lsf",
  })
  @get()
  static getLsf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lsf",
  })
  @post("{id}")
  static createLsf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
