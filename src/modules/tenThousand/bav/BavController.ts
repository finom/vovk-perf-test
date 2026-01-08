import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bav")
export default class BavController {
  @operation({
    summary: "Get Bav",
  })
  @get()
  static getBav = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bav",
  })
  @post("{id}")
  static createBav = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
