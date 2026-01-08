import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dqv")
export default class DqvController {
  @operation({
    summary: "Get Dqv",
  })
  @get()
  static getDqv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqv",
  })
  @post("{id}")
  static createDqv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
