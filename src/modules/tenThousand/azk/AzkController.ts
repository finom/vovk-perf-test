import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azk")
export default class AzkController {
  @operation({
    summary: "Get Azk",
  })
  @get()
  static getAzk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azk",
  })
  @post("{id}")
  static createAzk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
