import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jth")
export default class JthController {
  @operation({
    summary: "Get Jth",
  })
  @get()
  static getJth = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jth",
  })
  @post("{id}")
  static createJth = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
