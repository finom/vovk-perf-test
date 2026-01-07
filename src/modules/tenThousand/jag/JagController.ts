import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jag")
export default class JagController {
  @operation({
    summary: "Get Jag",
  })
  @get()
  static getJag = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jag",
  })
  @post("{id}")
  static createJag = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
