import { procedure, prefix, get, post, operation } from "vovk";

@prefix("goi")
export default class GoiController {
  @operation({
    summary: "Get Goi",
  })
  @get()
  static getGoi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Goi",
  })
  @post("{id}")
  static createGoi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
