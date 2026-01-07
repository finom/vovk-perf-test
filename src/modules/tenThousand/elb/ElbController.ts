import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elb")
export default class ElbController {
  @operation({
    summary: "Get Elb",
  })
  @get()
  static getElb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Elb",
  })
  @post("{id}")
  static createElb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
