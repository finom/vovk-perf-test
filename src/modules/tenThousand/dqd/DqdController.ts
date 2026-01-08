import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dqd")
export default class DqdController {
  @operation({
    summary: "Get Dqd",
  })
  @get()
  static getDqd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqd",
  })
  @post("{id}")
  static createDqd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
