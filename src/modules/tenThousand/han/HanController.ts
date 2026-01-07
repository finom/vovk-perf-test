import { procedure, prefix, get, post, operation } from "vovk";

@prefix("han")
export default class HanController {
  @operation({
    summary: "Get Han",
  })
  @get()
  static getHan = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Han",
  })
  @post("{id}")
  static createHan = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
