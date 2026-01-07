import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbh")
export default class BbhController {
  @operation({
    summary: "Get Bbh",
  })
  @get()
  static getBbh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbh",
  })
  @post("{id}")
  static createBbh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
