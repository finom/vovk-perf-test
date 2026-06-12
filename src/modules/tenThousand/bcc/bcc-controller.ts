import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bcc")
export default class BccController {
  @operation({
    summary: "Get Bcc",
  })
  @get()
  static getBcc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bcc",
  })
  @post("{id}")
  static createBcc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
