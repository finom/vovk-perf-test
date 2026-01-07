import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jef")
export default class JefController {
  @operation({
    summary: "Get Jef",
  })
  @get()
  static getJef = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jef",
  })
  @post("{id}")
  static createJef = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
