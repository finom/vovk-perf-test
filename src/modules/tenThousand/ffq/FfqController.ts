import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ffq")
export default class FfqController {
  @operation({
    summary: "Get Ffq",
  })
  @get()
  static getFfq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ffq",
  })
  @post("{id}")
  static createFfq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
