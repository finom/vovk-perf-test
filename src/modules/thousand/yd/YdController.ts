import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yd")
export default class YdController {
  @operation({
    summary: "Get Yd",
  })
  @get()
  static getYd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Yd",
  })
  @post("{id}")
  static createYd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
