import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hai")
export default class HaiController {
  @operation({
    summary: "Get Hai",
  })
  @get()
  static getHai = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hai",
  })
  @post("{id}")
  static createHai = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
