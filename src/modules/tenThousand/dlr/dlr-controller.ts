import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dlr")
export default class DlrController {
  @operation({
    summary: "Get Dlr",
  })
  @get()
  static getDlr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dlr",
  })
  @post("{id}")
  static createDlr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
