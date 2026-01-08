import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bwe")
export default class BweController {
  @operation({
    summary: "Get Bwe",
  })
  @get()
  static getBwe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bwe",
  })
  @post("{id}")
  static createBwe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
