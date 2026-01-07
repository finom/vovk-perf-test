import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbb")
export default class FbbController {
  @operation({
    summary: "Get Fbb",
  })
  @get()
  static getFbb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fbb",
  })
  @post("{id}")
  static createFbb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
