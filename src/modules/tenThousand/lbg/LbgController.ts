import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lbg")
export default class LbgController {
  @operation({
    summary: "Get Lbg",
  })
  @get()
  static getLbg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lbg",
  })
  @post("{id}")
  static createLbg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
