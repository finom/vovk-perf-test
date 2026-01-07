import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdq")
export default class KdqController {
  @operation({
    summary: "Get Kdq",
  })
  @get()
  static getKdq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kdq",
  })
  @post("{id}")
  static createKdq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
