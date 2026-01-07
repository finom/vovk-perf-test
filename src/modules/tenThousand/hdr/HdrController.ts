import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdr")
export default class HdrController {
  @operation({
    summary: "Get Hdr",
  })
  @get()
  static getHdr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hdr",
  })
  @post("{id}")
  static createHdr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
