import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ntp")
export default class NtpController {
  @operation({
    summary: "Get Ntp",
  })
  @get()
  static getNtp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ntp",
  })
  @post("{id}")
  static createNtp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
