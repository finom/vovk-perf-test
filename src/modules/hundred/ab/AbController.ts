import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ab")
export default class AbController {
  @operation({
    summary: "Get Ab",
  })
  @get()
  static getAb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ab",
  })
  @post("{id}")
  static createAb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
