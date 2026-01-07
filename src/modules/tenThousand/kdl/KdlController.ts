import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdl")
export default class KdlController {
  @operation({
    summary: "Get Kdl",
  })
  @get()
  static getKdl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kdl",
  })
  @post("{id}")
  static createKdl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
