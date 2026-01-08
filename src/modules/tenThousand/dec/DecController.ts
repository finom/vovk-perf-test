import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dec")
export default class DecController {
  @operation({
    summary: "Get Dec",
  })
  @get()
  static getDec = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dec",
  })
  @post("{id}")
  static createDec = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
