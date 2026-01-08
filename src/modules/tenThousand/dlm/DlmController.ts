import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dlm")
export default class DlmController {
  @operation({
    summary: "Get Dlm",
  })
  @get()
  static getDlm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dlm",
  })
  @post("{id}")
  static createDlm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
