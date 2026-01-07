import { procedure, prefix, get, post, operation } from "vovk";

@prefix("oj")
export default class OjController {
  @operation({
    summary: "Get Oj",
  })
  @get()
  static getOj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Oj",
  })
  @post("{id}")
  static createOj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
