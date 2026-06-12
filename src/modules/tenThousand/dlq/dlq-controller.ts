import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dlq")
export default class DlqController {
  @operation({
    summary: "Get Dlq",
  })
  @get()
  static getDlq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dlq",
  })
  @post("{id}")
  static createDlq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
