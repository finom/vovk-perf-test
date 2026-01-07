import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxc")
export default class HxcController {
  @operation({
    summary: "Get Hxc",
  })
  @get()
  static getHxc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxc",
  })
  @post("{id}")
  static createHxc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
