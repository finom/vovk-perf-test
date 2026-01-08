import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mjm")
export default class MjmController {
  @operation({
    summary: "Get Mjm",
  })
  @get()
  static getMjm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mjm",
  })
  @post("{id}")
  static createMjm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
