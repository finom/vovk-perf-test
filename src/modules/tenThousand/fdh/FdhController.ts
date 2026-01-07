import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdh")
export default class FdhController {
  @operation({
    summary: "Get Fdh",
  })
  @get()
  static getFdh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fdh",
  })
  @post("{id}")
  static createFdh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
