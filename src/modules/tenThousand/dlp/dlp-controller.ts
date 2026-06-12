import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dlp")
export default class DlpController {
  @operation({
    summary: "Get Dlp",
  })
  @get()
  static getDlp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dlp",
  })
  @post("{id}")
  static createDlp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
