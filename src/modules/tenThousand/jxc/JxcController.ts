import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxc")
export default class JxcController {
  @operation({
    summary: "Get Jxc",
  })
  @get()
  static getJxc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jxc",
  })
  @post("{id}")
  static createJxc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
