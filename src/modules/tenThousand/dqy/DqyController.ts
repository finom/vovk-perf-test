import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dqy")
export default class DqyController {
  @operation({
    summary: "Get Dqy",
  })
  @get()
  static getDqy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqy",
  })
  @post("{id}")
  static createDqy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
