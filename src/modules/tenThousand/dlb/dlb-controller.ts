import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dlb")
export default class DlbController {
  @operation({
    summary: "Get Dlb",
  })
  @get()
  static getDlb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dlb",
  })
  @post("{id}")
  static createDlb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
