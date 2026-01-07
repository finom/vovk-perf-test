import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mns")
export default class MnsController {
  @operation({
    summary: "Get Mns",
  })
  @get()
  static getMns = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mns",
  })
  @post("{id}")
  static createMns = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
