import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcp")
export default class JcpController {
  @operation({
    summary: "Get Jcp",
  })
  @get()
  static getJcp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jcp",
  })
  @post("{id}")
  static createJcp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
