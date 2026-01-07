import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdq")
export default class JdqController {
  @operation({
    summary: "Get Jdq",
  })
  @get()
  static getJdq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jdq",
  })
  @post("{id}")
  static createJdq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
