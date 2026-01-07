import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhp")
export default class JhpController {
  @operation({
    summary: "Get Jhp",
  })
  @get()
  static getJhp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jhp",
  })
  @post("{id}")
  static createJhp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
