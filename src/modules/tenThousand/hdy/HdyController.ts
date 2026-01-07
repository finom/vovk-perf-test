import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdy")
export default class HdyController {
  @operation({
    summary: "Get Hdy",
  })
  @get()
  static getHdy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hdy",
  })
  @post("{id}")
  static createHdy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
