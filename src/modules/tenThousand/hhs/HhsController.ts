import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhs")
export default class HhsController {
  @operation({
    summary: "Get Hhs",
  })
  @get()
  static getHhs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hhs",
  })
  @post("{id}")
  static createHhs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
