import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdh")
export default class MdhController {
  @operation({
    summary: "Get Mdh",
  })
  @get()
  static getMdh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mdh",
  })
  @post("{id}")
  static createMdh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
