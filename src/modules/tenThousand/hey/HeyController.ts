import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hey")
export default class HeyController {
  @operation({
    summary: "Get Hey",
  })
  @get()
  static getHey = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hey",
  })
  @post("{id}")
  static createHey = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
