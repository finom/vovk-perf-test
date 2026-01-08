import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dlc")
export default class DlcController {
  @operation({
    summary: "Get Dlc",
  })
  @get()
  static getDlc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dlc",
  })
  @post("{id}")
  static createDlc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
