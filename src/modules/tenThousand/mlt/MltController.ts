import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mlt")
export default class MltController {
  @operation({
    summary: "Get Mlt",
  })
  @get()
  static getMlt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mlt",
  })
  @post("{id}")
  static createMlt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
