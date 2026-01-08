import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dcb")
export default class DcbController {
  @operation({
    summary: "Get Dcb",
  })
  @get()
  static getDcb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dcb",
  })
  @post("{id}")
  static createDcb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
