import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnc")
export default class HncController {
  @operation({
    summary: "Get Hnc",
  })
  @get()
  static getHnc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hnc",
  })
  @post("{id}")
  static createHnc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
