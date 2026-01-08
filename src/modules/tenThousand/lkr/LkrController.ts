import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lkr")
export default class LkrController {
  @operation({
    summary: "Get Lkr",
  })
  @get()
  static getLkr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lkr",
  })
  @post("{id}")
  static createLkr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
