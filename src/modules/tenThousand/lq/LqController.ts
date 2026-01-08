import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lq")
export default class LqController {
  @operation({
    summary: "Get Lq",
  })
  @get()
  static getLq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lq",
  })
  @post("{id}")
  static createLq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
