import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jq")
export default class JqController {
  @operation({
    summary: "Get Jq",
  })
  @get()
  static getJq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jq",
  })
  @post("{id}")
  static createJq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
