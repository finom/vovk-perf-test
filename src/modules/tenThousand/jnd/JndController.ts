import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnd")
export default class JndController {
  @operation({
    summary: "Get Jnd",
  })
  @get()
  static getJnd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jnd",
  })
  @post("{id}")
  static createJnd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
