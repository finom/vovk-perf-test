import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dqz")
export default class DqzController {
  @operation({
    summary: "Get Dqz",
  })
  @get()
  static getDqz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqz",
  })
  @post("{id}")
  static createDqz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
