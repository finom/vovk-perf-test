import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgh")
export default class JghController {
  @operation({
    summary: "Get Jgh",
  })
  @get()
  static getJgh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jgh",
  })
  @post("{id}")
  static createJgh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
