import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hiu")
export default class HiuController {
  @operation({
    summary: "Get Hiu",
  })
  @get()
  static getHiu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hiu",
  })
  @post("{id}")
  static createHiu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
