import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtg")
export default class JtgController {
  @operation({
    summary: "Get Jtg",
  })
  @get()
  static getJtg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jtg",
  })
  @post("{id}")
  static createJtg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
