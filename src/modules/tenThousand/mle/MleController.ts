import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mle")
export default class MleController {
  @operation({
    summary: "Get Mle",
  })
  @get()
  static getMle = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mle",
  })
  @post("{id}")
  static createMle = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
