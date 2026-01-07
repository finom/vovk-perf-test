import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgy")
export default class JgyController {
  @operation({
    summary: "Get Jgy",
  })
  @get()
  static getJgy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jgy",
  })
  @post("{id}")
  static createJgy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
