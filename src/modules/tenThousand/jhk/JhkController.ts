import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhk")
export default class JhkController {
  @operation({
    summary: "Get Jhk",
  })
  @get()
  static getJhk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jhk",
  })
  @post("{id}")
  static createJhk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
