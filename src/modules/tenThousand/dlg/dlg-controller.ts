import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dlg")
export default class DlgController {
  @operation({
    summary: "Get Dlg",
  })
  @get()
  static getDlg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dlg",
  })
  @post("{id}")
  static createDlg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
