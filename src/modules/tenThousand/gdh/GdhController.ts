import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdh")
export default class GdhController {
  @operation({
    summary: "Get Gdh",
  })
  @get()
  static getGdh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gdh",
  })
  @post("{id}")
  static createGdh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
