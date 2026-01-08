import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mmj")
export default class MmjController {
  @operation({
    summary: "Get Mmj",
  })
  @get()
  static getMmj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mmj",
  })
  @post("{id}")
  static createMmj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
