import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eva")
export default class EvaController {
  @operation({
    summary: "Get Eva",
  })
  @get()
  static getEva = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eva",
  })
  @post("{id}")
  static createEva = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
