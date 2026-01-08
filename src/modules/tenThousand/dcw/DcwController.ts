import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dcw")
export default class DcwController {
  @operation({
    summary: "Get Dcw",
  })
  @get()
  static getDcw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dcw",
  })
  @post("{id}")
  static createDcw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
