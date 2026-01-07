import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bt")
export default class BtController {
  @operation({
    summary: "Get Bt",
  })
  @get()
  static getBt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bt",
  })
  @post("{id}")
  static createBt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
