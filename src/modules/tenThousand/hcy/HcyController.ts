import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcy")
export default class HcyController {
  @operation({
    summary: "Get Hcy",
  })
  @get()
  static getHcy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hcy",
  })
  @post("{id}")
  static createHcy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
