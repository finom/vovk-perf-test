import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bax")
export default class BaxController {
  @operation({
    summary: "Get Bax",
  })
  @get()
  static getBax = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bax",
  })
  @post("{id}")
  static createBax = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
