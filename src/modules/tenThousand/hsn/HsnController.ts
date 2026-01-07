import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsn")
export default class HsnController {
  @operation({
    summary: "Get Hsn",
  })
  @get()
  static getHsn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hsn",
  })
  @post("{id}")
  static createHsn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
