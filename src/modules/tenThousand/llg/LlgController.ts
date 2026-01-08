import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("llg")
export default class LlgController {
  @operation({
    summary: "Get Llg",
  })
  @get()
  static getLlg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Llg",
  })
  @post("{id}")
  static createLlg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
