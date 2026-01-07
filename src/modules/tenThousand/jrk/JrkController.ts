import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrk")
export default class JrkController {
  @operation({
    summary: "Get Jrk",
  })
  @get()
  static getJrk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jrk",
  })
  @post("{id}")
  static createJrk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
