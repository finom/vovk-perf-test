import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bpi")
export default class BpiController {
  @operation({
    summary: "Get Bpi",
  })
  @get()
  static getBpi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bpi",
  })
  @post("{id}")
  static createBpi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
