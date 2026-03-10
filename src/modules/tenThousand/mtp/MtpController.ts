import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mtp")
export default class MtpController {
  @operation({
    summary: "Get Mtp",
  })
  @get()
  static getMtp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mtp",
  })
  @post("{id}")
  static createMtp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
