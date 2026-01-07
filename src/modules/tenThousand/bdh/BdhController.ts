import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdh")
export default class BdhController {
  @operation({
    summary: "Get Bdh",
  })
  @get()
  static getBdh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bdh",
  })
  @post("{id}")
  static createBdh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
