import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jx")
export default class JxController {
  @operation({
    summary: "Get Jx",
  })
  @get()
  static getJx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jx",
  })
  @post("{id}")
  static createJx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
