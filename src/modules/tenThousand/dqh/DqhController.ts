import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dqh")
export default class DqhController {
  @operation({
    summary: "Get Dqh",
  })
  @get()
  static getDqh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqh",
  })
  @post("{id}")
  static createDqh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
