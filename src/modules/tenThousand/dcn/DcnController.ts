import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dcn")
export default class DcnController {
  @operation({
    summary: "Get Dcn",
  })
  @get()
  static getDcn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dcn",
  })
  @post("{id}")
  static createDcn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
