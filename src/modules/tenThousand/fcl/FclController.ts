import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcl")
export default class FclController {
  @operation({
    summary: "Get Fcl",
  })
  @get()
  static getFcl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fcl",
  })
  @post("{id}")
  static createFcl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
