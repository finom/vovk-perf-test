import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dpi")
export default class DpiController {
  @operation({
    summary: "Get Dpi",
  })
  @get()
  static getDpi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dpi",
  })
  @post("{id}")
  static createDpi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
