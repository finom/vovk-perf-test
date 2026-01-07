import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftp")
export default class FtpController {
  @operation({
    summary: "Get Ftp",
  })
  @get()
  static getFtp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ftp",
  })
  @post("{id}")
  static createFtp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
