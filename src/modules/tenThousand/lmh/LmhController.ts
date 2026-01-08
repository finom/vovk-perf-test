import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lmh")
export default class LmhController {
  @operation({
    summary: "Get Lmh",
  })
  @get()
  static getLmh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lmh",
  })
  @post("{id}")
  static createLmh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
