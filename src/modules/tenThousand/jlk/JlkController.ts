import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlk")
export default class JlkController {
  @operation({
    summary: "Get Jlk",
  })
  @get()
  static getJlk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jlk",
  })
  @post("{id}")
  static createJlk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
