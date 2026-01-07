import { procedure, prefix, get, post, operation } from "vovk";

@prefix("net")
export default class NetController {
  @operation({
    summary: "Get Net",
  })
  @get()
  static getNet = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Net",
  })
  @post("{id}")
  static createNet = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
