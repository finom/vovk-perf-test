import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjx")
export default class JjxController {
  @operation({
    summary: "Get Jjx",
  })
  @get()
  static getJjx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jjx",
  })
  @post("{id}")
  static createJjx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
