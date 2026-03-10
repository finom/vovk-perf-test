import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ftp")
export default class FtpController {
  @operation({
    summary: "Get Ftp",
  })
  @get()
  static getFtp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ftp",
  })
  @post("{id}")
  static createFtp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
