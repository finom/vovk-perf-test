import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lmj")
export default class LmjController {
  @operation({
    summary: "Get Lmj",
  })
  @get()
  static getLmj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lmj",
  })
  @post("{id}")
  static createLmj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
