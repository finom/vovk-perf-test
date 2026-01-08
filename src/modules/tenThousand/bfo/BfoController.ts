import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bfo")
export default class BfoController {
  @operation({
    summary: "Get Bfo",
  })
  @get()
  static getBfo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bfo",
  })
  @post("{id}")
  static createBfo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
