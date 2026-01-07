import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfq")
export default class HfqController {
  @operation({
    summary: "Get Hfq",
  })
  @get()
  static getHfq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hfq",
  })
  @post("{id}")
  static createHfq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
