import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imk")
export default class ImkController {
  @operation({
    summary: "Get Imk",
  })
  @get()
  static getImk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Imk",
  })
  @post("{id}")
  static createImk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
