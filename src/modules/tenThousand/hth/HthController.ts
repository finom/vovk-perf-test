import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hth")
export default class HthController {
  @operation({
    summary: "Get Hth",
  })
  @get()
  static getHth = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hth",
  })
  @post("{id}")
  static createHth = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
