import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhm")
export default class HhmController {
  @operation({
    summary: "Get Hhm",
  })
  @get()
  static getHhm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hhm",
  })
  @post("{id}")
  static createHhm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
