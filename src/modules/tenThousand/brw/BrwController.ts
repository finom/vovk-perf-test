import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("brw")
export default class BrwController {
  @operation({
    summary: "Get Brw",
  })
  @get()
  static getBrw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Brw",
  })
  @post("{id}")
  static createBrw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
