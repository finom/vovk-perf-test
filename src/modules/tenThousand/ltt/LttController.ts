import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ltt")
export default class LttController {
  @operation({
    summary: "Get Ltt",
  })
  @get()
  static getLtt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ltt",
  })
  @post("{id}")
  static createLtt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
