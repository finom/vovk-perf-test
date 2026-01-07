import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrk")
export default class HrkController {
  @operation({
    summary: "Get Hrk",
  })
  @get()
  static getHrk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hrk",
  })
  @post("{id}")
  static createHrk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
