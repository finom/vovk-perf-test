import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bei")
export default class BeiController {
  @operation({
    summary: "Get Bei",
  })
  @get()
  static getBei = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bei",
  })
  @post("{id}")
  static createBei = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
