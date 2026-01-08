import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fwd")
export default class FwdController {
  @operation({
    summary: "Get Fwd",
  })
  @get()
  static getFwd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwd",
  })
  @post("{id}")
  static createFwd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
