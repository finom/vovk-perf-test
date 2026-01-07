import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgi")
export default class CgiController {
  @operation({
    summary: "Get Cgi",
  })
  @get()
  static getCgi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgi",
  })
  @post("{id}")
  static createCgi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
