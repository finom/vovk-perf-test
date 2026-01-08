import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dts")
export default class DtsController {
  @operation({
    summary: "Get Dts",
  })
  @get()
  static getDts = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dts",
  })
  @post("{id}")
  static createDts = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
