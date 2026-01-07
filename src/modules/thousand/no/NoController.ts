import { procedure, prefix, get, post, operation } from "vovk";

@prefix("no")
export default class NoController {
  @operation({
    summary: "Get No",
  })
  @get()
  static getNo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create No",
  })
  @post("{id}")
  static createNo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
