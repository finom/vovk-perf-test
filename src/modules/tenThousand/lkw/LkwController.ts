import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lkw")
export default class LkwController {
  @operation({
    summary: "Get Lkw",
  })
  @get()
  static getLkw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lkw",
  })
  @post("{id}")
  static createLkw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
