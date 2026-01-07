import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bag")
export default class BagController {
  @operation({
    summary: "Get Bag",
  })
  @get()
  static getBag = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bag",
  })
  @post("{id}")
  static createBag = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
