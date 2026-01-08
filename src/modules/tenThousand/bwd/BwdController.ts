import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bwd")
export default class BwdController {
  @operation({
    summary: "Get Bwd",
  })
  @get()
  static getBwd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bwd",
  })
  @post("{id}")
  static createBwd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
