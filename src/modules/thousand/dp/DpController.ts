import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dp")
export default class DpController {
  @operation({
    summary: "Get Dp",
  })
  @get()
  static getDp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dp",
  })
  @post("{id}")
  static createDp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
