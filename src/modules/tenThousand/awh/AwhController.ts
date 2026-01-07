import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awh")
export default class AwhController {
  @operation({
    summary: "Get Awh",
  })
  @get()
  static getAwh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Awh",
  })
  @post("{id}")
  static createAwh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
