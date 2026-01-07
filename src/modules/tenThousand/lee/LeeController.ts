import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lee")
export default class LeeController {
  @operation({
    summary: "Get Lee",
  })
  @get()
  static getLee = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lee",
  })
  @post("{id}")
  static createLee = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
