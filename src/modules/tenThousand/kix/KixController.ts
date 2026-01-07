import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kix")
export default class KixController {
  @operation({
    summary: "Get Kix",
  })
  @get()
  static getKix = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kix",
  })
  @post("{id}")
  static createKix = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
