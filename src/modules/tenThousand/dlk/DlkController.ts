import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dlk")
export default class DlkController {
  @operation({
    summary: "Get Dlk",
  })
  @get()
  static getDlk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dlk",
  })
  @post("{id}")
  static createDlk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
