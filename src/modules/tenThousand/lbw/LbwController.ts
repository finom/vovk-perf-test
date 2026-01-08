import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lbw")
export default class LbwController {
  @operation({
    summary: "Get Lbw",
  })
  @get()
  static getLbw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lbw",
  })
  @post("{id}")
  static createLbw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
