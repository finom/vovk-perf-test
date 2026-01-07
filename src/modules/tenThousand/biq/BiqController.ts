import { procedure, prefix, get, post, operation } from "vovk";

@prefix("biq")
export default class BiqController {
  @operation({
    summary: "Get Biq",
  })
  @get()
  static getBiq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Biq",
  })
  @post("{id}")
  static createBiq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
