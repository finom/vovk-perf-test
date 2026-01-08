import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dtx")
export default class DtxController {
  @operation({
    summary: "Get Dtx",
  })
  @get()
  static getDtx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dtx",
  })
  @post("{id}")
  static createDtx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
