import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdw")
export default class JdwController {
  @operation({
    summary: "Get Jdw",
  })
  @get()
  static getJdw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jdw",
  })
  @post("{id}")
  static createJdw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
