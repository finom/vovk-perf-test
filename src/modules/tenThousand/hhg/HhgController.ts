import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhg")
export default class HhgController {
  @operation({
    summary: "Get Hhg",
  })
  @get()
  static getHhg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hhg",
  })
  @post("{id}")
  static createHhg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
