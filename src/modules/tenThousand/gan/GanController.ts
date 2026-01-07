import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gan")
export default class GanController {
  @operation({
    summary: "Get Gan",
  })
  @get()
  static getGan = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gan",
  })
  @post("{id}")
  static createGan = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
