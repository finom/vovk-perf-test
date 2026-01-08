import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dqe")
export default class DqeController {
  @operation({
    summary: "Get Dqe",
  })
  @get()
  static getDqe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqe",
  })
  @post("{id}")
  static createDqe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
