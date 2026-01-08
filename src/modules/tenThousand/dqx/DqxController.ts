import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dqx")
export default class DqxController {
  @operation({
    summary: "Get Dqx",
  })
  @get()
  static getDqx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqx",
  })
  @post("{id}")
  static createDqx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
