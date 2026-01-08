import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nlk")
export default class NlkController {
  @operation({
    summary: "Get Nlk",
  })
  @get()
  static getNlk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nlk",
  })
  @post("{id}")
  static createNlk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
