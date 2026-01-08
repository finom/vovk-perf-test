import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bbd")
export default class BbdController {
  @operation({
    summary: "Get Bbd",
  })
  @get()
  static getBbd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbd",
  })
  @post("{id}")
  static createBbd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
