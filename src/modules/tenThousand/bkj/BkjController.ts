import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bkj")
export default class BkjController {
  @operation({
    summary: "Get Bkj",
  })
  @get()
  static getBkj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bkj",
  })
  @post("{id}")
  static createBkj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
