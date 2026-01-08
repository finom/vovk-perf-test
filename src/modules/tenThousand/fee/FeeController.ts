import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fee")
export default class FeeController {
  @operation({
    summary: "Get Fee",
  })
  @get()
  static getFee = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fee",
  })
  @post("{id}")
  static createFee = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
