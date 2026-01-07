import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijc")
export default class IjcController {
  @operation({
    summary: "Get Ijc",
  })
  @get()
  static getIjc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ijc",
  })
  @post("{id}")
  static createIjc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
