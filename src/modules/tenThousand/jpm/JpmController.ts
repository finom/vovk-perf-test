import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpm")
export default class JpmController {
  @operation({
    summary: "Get Jpm",
  })
  @get()
  static getJpm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jpm",
  })
  @post("{id}")
  static createJpm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
