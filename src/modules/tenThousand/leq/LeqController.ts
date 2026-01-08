import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("leq")
export default class LeqController {
  @operation({
    summary: "Get Leq",
  })
  @get()
  static getLeq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Leq",
  })
  @post("{id}")
  static createLeq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
