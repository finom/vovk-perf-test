import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hun")
export default class HunController {
  @operation({
    summary: "Get Hun",
  })
  @get()
  static getHun = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hun",
  })
  @post("{id}")
  static createHun = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
