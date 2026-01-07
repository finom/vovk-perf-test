import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgl")
export default class HglController {
  @operation({
    summary: "Get Hgl",
  })
  @get()
  static getHgl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hgl",
  })
  @post("{id}")
  static createHgl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
