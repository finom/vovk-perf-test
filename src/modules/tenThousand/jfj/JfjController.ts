import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfj")
export default class JfjController {
  @operation({
    summary: "Get Jfj",
  })
  @get()
  static getJfj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jfj",
  })
  @post("{id}")
  static createJfj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
