import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mkt")
export default class MktController {
  @operation({
    summary: "Get Mkt",
  })
  @get()
  static getMkt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mkt",
  })
  @post("{id}")
  static createMkt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
