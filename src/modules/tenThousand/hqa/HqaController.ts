import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqa")
export default class HqaController {
  @operation({
    summary: "Get Hqa",
  })
  @get()
  static getHqa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqa",
  })
  @post("{id}")
  static createHqa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
