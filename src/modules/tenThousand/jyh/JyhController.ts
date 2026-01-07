import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyh")
export default class JyhController {
  @operation({
    summary: "Get Jyh",
  })
  @get()
  static getJyh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jyh",
  })
  @post("{id}")
  static createJyh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
