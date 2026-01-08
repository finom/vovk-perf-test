import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dlv")
export default class DlvController {
  @operation({
    summary: "Get Dlv",
  })
  @get()
  static getDlv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dlv",
  })
  @post("{id}")
  static createDlv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
