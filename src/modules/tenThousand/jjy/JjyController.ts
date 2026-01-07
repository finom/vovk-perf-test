import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjy")
export default class JjyController {
  @operation({
    summary: "Get Jjy",
  })
  @get()
  static getJjy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jjy",
  })
  @post("{id}")
  static createJjy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
