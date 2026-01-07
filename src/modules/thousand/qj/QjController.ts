import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qj")
export default class QjController {
  @operation({
    summary: "Get Qj",
  })
  @get()
  static getQj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Qj",
  })
  @post("{id}")
  static createQj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
