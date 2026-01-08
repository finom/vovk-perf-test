import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dcm")
export default class DcmController {
  @operation({
    summary: "Get Dcm",
  })
  @get()
  static getDcm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dcm",
  })
  @post("{id}")
  static createDcm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
