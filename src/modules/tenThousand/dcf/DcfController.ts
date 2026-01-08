import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dcf")
export default class DcfController {
  @operation({
    summary: "Get Dcf",
  })
  @get()
  static getDcf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dcf",
  })
  @post("{id}")
  static createDcf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
