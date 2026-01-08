import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dqq")
export default class DqqController {
  @operation({
    summary: "Get Dqq",
  })
  @get()
  static getDqq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqq",
  })
  @post("{id}")
  static createDqq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
