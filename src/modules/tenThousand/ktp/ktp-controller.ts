import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ktp")
export default class KtpController {
  @operation({
    summary: "Get Ktp",
  })
  @get()
  static getKtp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ktp",
  })
  @post("{id}")
  static createKtp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
