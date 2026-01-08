import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mc")
export default class McController {
  @operation({
    summary: "Get Mc",
  })
  @get()
  static getMc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mc",
  })
  @post("{id}")
  static createMc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
