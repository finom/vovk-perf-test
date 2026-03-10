import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dlx")
export default class DlxController {
  @operation({
    summary: "Get Dlx",
  })
  @get()
  static getDlx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dlx",
  })
  @post("{id}")
  static createDlx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
