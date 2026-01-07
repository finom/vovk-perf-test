import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmd")
export default class HmdController {
  @operation({
    summary: "Get Hmd",
  })
  @get()
  static getHmd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hmd",
  })
  @post("{id}")
  static createHmd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
