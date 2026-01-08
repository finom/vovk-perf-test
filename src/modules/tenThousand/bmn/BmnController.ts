import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bmn")
export default class BmnController {
  @operation({
    summary: "Get Bmn",
  })
  @get()
  static getBmn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmn",
  })
  @post("{id}")
  static createBmn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
