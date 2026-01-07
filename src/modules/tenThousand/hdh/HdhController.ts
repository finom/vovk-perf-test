import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdh")
export default class HdhController {
  @operation({
    summary: "Get Hdh",
  })
  @get()
  static getHdh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hdh",
  })
  @post("{id}")
  static createHdh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
