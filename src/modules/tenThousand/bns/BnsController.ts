import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bns")
export default class BnsController {
  @operation({
    summary: "Get Bns",
  })
  @get()
  static getBns = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bns",
  })
  @post("{id}")
  static createBns = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
