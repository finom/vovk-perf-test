import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffq")
export default class FfqController {
  @operation({
    summary: "Get Ffq",
  })
  @get()
  static getFfq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ffq",
  })
  @post("{id}")
  static createFfq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
