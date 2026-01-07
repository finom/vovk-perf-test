import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hx")
export default class HxController {
  @operation({
    summary: "Get Hx",
  })
  @get()
  static getHx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hx",
  })
  @post("{id}")
  static createHx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
