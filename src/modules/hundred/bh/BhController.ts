import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bh")
export default class BhController {
  @operation({
    summary: "Get Bh",
  })
  @get()
  static getBh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bh",
  })
  @post("{id}")
  static createBh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
