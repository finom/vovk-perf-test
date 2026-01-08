import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lkc")
export default class LkcController {
  @operation({
    summary: "Get Lkc",
  })
  @get()
  static getLkc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lkc",
  })
  @post("{id}")
  static createLkc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
