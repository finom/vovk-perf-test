import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jux")
export default class JuxController {
  @operation({
    summary: "Get Jux",
  })
  @get()
  static getJux = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jux",
  })
  @post("{id}")
  static createJux = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
