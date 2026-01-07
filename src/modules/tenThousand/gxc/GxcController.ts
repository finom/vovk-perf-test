import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxc")
export default class GxcController {
  @operation({
    summary: "Get Gxc",
  })
  @get()
  static getGxc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxc",
  })
  @post("{id}")
  static createGxc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
