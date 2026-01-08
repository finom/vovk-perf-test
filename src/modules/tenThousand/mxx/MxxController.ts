import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mxx")
export default class MxxController {
  @operation({
    summary: "Get Mxx",
  })
  @get()
  static getMxx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxx",
  })
  @post("{id}")
  static createMxx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
