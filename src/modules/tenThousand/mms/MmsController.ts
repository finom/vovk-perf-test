import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mms")
export default class MmsController {
  @operation({
    summary: "Get Mms",
  })
  @get()
  static getMms = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mms",
  })
  @post("{id}")
  static createMms = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
