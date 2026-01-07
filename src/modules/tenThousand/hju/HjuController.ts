import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hju")
export default class HjuController {
  @operation({
    summary: "Get Hju",
  })
  @get()
  static getHju = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hju",
  })
  @post("{id}")
  static createHju = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
