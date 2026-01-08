import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bk")
export default class BkController {
  @operation({
    summary: "Get Bk",
  })
  @get()
  static getBk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bk",
  })
  @post("{id}")
  static createBk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
