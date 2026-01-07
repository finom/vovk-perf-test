import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtw")
export default class JtwController {
  @operation({
    summary: "Get Jtw",
  })
  @get()
  static getJtw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jtw",
  })
  @post("{id}")
  static createJtw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
