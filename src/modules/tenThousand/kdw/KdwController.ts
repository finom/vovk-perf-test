import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdw")
export default class KdwController {
  @operation({
    summary: "Get Kdw",
  })
  @get()
  static getKdw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kdw",
  })
  @post("{id}")
  static createKdw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
