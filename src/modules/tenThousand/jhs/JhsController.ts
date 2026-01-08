import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jhs")
export default class JhsController {
  @operation({
    summary: "Get Jhs",
  })
  @get()
  static getJhs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jhs",
  })
  @post("{id}")
  static createJhs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
