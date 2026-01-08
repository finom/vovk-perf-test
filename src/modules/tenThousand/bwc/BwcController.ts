import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bwc")
export default class BwcController {
  @operation({
    summary: "Get Bwc",
  })
  @get()
  static getBwc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bwc",
  })
  @post("{id}")
  static createBwc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
