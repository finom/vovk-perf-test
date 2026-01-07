import { procedure, prefix, get, post, operation } from "vovk";

@prefix("m")
export default class MController {
  @operation({
    summary: "Get M",
  })
  @get()
  static getM = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create M",
  })
  @post("{id}")
  static createM = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
