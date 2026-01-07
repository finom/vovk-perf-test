import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrp")
export default class JrpController {
  @operation({
    summary: "Get Jrp",
  })
  @get()
  static getJrp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jrp",
  })
  @post("{id}")
  static createJrp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
