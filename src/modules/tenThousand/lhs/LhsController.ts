import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lhs")
export default class LhsController {
  @operation({
    summary: "Get Lhs",
  })
  @get()
  static getLhs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lhs",
  })
  @post("{id}")
  static createLhs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
