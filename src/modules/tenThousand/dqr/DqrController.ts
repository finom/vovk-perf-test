import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dqr")
export default class DqrController {
  @operation({
    summary: "Get Dqr",
  })
  @get()
  static getDqr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqr",
  })
  @post("{id}")
  static createDqr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
