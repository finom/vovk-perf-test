import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfk")
export default class JfkController {
  @operation({
    summary: "Get Jfk",
  })
  @get()
  static getJfk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jfk",
  })
  @post("{id}")
  static createJfk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
