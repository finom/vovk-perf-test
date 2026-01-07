import { procedure, prefix, get, post, operation } from "vovk";

@prefix("n")
export default class NController {
  @operation({
    summary: "Get N",
  })
  @get()
  static getN = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create N",
  })
  @post("{id}")
  static createN = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
