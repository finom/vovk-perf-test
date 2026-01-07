import { procedure, prefix, get, post, operation } from "vovk";

@prefix("her")
export default class HerController {
  @operation({
    summary: "Get Her",
  })
  @get()
  static getHer = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Her",
  })
  @post("{id}")
  static createHer = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
