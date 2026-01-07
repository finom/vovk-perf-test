import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjz")
export default class JjzController {
  @operation({
    summary: "Get Jjz",
  })
  @get()
  static getJjz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jjz",
  })
  @post("{id}")
  static createJjz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
