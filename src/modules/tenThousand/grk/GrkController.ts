import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grk")
export default class GrkController {
  @operation({
    summary: "Get Grk",
  })
  @get()
  static getGrk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Grk",
  })
  @post("{id}")
  static createGrk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
