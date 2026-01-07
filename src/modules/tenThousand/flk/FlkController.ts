import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flk")
export default class FlkController {
  @operation({
    summary: "Get Flk",
  })
  @get()
  static getFlk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Flk",
  })
  @post("{id}")
  static createFlk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
