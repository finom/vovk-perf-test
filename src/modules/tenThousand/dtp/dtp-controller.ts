import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dtp")
export default class DtpController {
  @operation({
    summary: "Get Dtp",
  })
  @get()
  static getDtp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dtp",
  })
  @post("{id}")
  static createDtp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
