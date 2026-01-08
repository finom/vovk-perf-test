import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dqm")
export default class DqmController {
  @operation({
    summary: "Get Dqm",
  })
  @get()
  static getDqm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqm",
  })
  @post("{id}")
  static createDqm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
