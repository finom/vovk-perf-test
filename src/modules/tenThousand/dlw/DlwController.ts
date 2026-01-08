import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dlw")
export default class DlwController {
  @operation({
    summary: "Get Dlw",
  })
  @get()
  static getDlw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dlw",
  })
  @post("{id}")
  static createDlw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
