import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amk")
export default class AmkController {
  @operation({
    summary: "Get Amk",
  })
  @get()
  static getAmk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Amk",
  })
  @post("{id}")
  static createAmk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
