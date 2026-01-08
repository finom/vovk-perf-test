import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mdn")
export default class MdnController {
  @operation({
    summary: "Get Mdn",
  })
  @get()
  static getMdn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mdn",
  })
  @post("{id}")
  static createMdn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
