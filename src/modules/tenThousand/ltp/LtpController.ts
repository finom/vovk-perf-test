import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ltp")
export default class LtpController {
  @operation({
    summary: "Get Ltp",
  })
  @get()
  static getLtp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ltp",
  })
  @post("{id}")
  static createLtp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
