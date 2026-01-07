import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rx")
export default class RxController {
  @operation({
    summary: "Get Rx",
  })
  @get()
  static getRx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Rx",
  })
  @post("{id}")
  static createRx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
