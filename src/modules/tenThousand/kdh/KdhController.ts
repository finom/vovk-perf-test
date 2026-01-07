import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdh")
export default class KdhController {
  @operation({
    summary: "Get Kdh",
  })
  @get()
  static getKdh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kdh",
  })
  @post("{id}")
  static createKdh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
