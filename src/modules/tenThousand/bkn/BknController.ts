import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bkn")
export default class BknController {
  @operation({
    summary: "Get Bkn",
  })
  @get()
  static getBkn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bkn",
  })
  @post("{id}")
  static createBkn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
