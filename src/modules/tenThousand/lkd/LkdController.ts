import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lkd")
export default class LkdController {
  @operation({
    summary: "Get Lkd",
  })
  @get()
  static getLkd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lkd",
  })
  @post("{id}")
  static createLkd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
