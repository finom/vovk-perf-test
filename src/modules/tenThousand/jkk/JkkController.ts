import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkk")
export default class JkkController {
  @operation({
    summary: "Get Jkk",
  })
  @get()
  static getJkk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jkk",
  })
  @post("{id}")
  static createJkk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
