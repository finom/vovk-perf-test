import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crk")
export default class CrkController {
  @operation({
    summary: "Get Crk",
  })
  @get()
  static getCrk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Crk",
  })
  @post("{id}")
  static createCrk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
