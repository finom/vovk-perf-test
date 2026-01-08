import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dtb")
export default class DtbController {
  @operation({
    summary: "Get Dtb",
  })
  @get()
  static getDtb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dtb",
  })
  @post("{id}")
  static createDtb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
