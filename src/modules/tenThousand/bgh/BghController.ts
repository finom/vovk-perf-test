import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgh")
export default class BghController {
  @operation({
    summary: "Get Bgh",
  })
  @get()
  static getBgh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bgh",
  })
  @post("{id}")
  static createBgh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
