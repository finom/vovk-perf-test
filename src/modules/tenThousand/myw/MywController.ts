import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("myw")
export default class MywController {
  @operation({
    summary: "Get Myw",
  })
  @get()
  static getMyw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Myw",
  })
  @post("{id}")
  static createMyw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
