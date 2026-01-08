import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jlg")
export default class JlgController {
  @operation({
    summary: "Get Jlg",
  })
  @get()
  static getJlg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jlg",
  })
  @post("{id}")
  static createJlg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
