import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncx")
export default class NcxController {
  @operation({
    summary: "Get Ncx",
  })
  @get()
  static getNcx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ncx",
  })
  @post("{id}")
  static createNcx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
