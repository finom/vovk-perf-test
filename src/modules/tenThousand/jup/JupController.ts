import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jup")
export default class JupController {
  @operation({
    summary: "Get Jup",
  })
  @get()
  static getJup = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jup",
  })
  @post("{id}")
  static createJup = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
